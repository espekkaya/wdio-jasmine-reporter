import WDIOReporter from '@wdio/reporter';
import moment from 'moment';

import TestResultAggregate from './common/TestResultAggreagate';

const esc = {
    sp: '\u0020',
    nl: '\n'
}

let suiteEndOnce = true;

export default class JasmineReporter extends WDIOReporter {
    startTime: any;
    endTime: any;

    constructor(options: any) {
        /*
         * make reporter to write to the output stream by default
         */
        options = Object.assign(options, { stdout: true });

        super(options);

        if(options.aggregateResultPah) {
            TestResultAggregate.resultFilePath = options.aggregateResultPah;

            if(options.isResetResult !== false)
                Promise.all([this.resetTestResults()]);
        }
    }
    
    async resetTestResults() {
        await TestResultAggregate.setResult2File(TestResultAggregate.result);
    }

    addLeadingZeros(num: number, totalLength: number = 2) {
        return String(num).padStart(totalLength, '0');
      }

    onSuiteStart(test: any) {
        this.startTime = moment();

        if (test.type == "feature")
            process.stdout.write(`${esc.sp}${esc.sp}Feature: ${test.title}${esc.nl}`)
        else
            process.stdout.write(`${esc.sp}${esc.sp}${esc.sp}${esc.sp}Suite: ${test.title}${esc.nl}`)
    }

    onTestPass(test: any) {
        process.stdout.write(`✓ ${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${test.title}${esc.nl}`)
    }

    onTestFail(test: any) {
        // process.stdout.write(`𐄂 ${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${test.title}${esc.nl}
        //     ${esc.nl}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${test.error.message}${esc.nl}
        //     ${esc.nl}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${test.error.stack}${esc.nl}
        // `)
    }

    onTestSkip(test: any) {
        process.stdout.write(`⎯ ${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${test.title}${esc.nl}`)
    }

    async onSuiteEnd() {
        if(!suiteEndOnce)
            return;
        
        suiteEndOnce = false;

        this.endTime = moment();

        const results = this.counts;
        const total = results.failures + results.passes + results.skipping

        TestResultAggregate.result = await TestResultAggregate.getResultFromFile();
        TestResultAggregate.result.TestStatus.PASSED += results.passes;
        TestResultAggregate.result.TestStatus.FAILED += results.failures;
        TestResultAggregate.result.TestStatus.SKIPPED += results.skipping;
        await TestResultAggregate.setResult2File(TestResultAggregate.result);

        process.stdout.write(total + ` test case${total > 1 ? 's' : ''} (` + results.passes + ' passed, ' + results.failures + ' failed, ' + results.skipping + ' skipped)' + esc.nl + esc.nl);

        const hours = this.endTime.diff(this.startTime, 'hours');
        const minutes = this.endTime.diff(this.startTime, 'minutes');
        const seconds = this.endTime.diff(this.startTime, 'seconds');
    
        process.stdout.write(`Total Run Time : ${this.addLeadingZeros(hours)}:${this.addLeadingZeros(minutes)}:${this.addLeadingZeros(seconds)}`);
    }
}