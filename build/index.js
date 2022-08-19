"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter_1 = __importDefault(require("@wdio/reporter"));
const moment_1 = __importDefault(require("moment"));
const TestResultAggreagate_1 = __importDefault(require("./common/TestResultAggreagate"));
const esc = {
    sp: '\u0020',
    nl: '\n'
};
let suiteEndOnce = true;
class JasmineReporter extends reporter_1.default {
    constructor(options) {
        /*
         * make reporter to write to the output stream by default
         */
        options = Object.assign(options, { stdout: true });
        super(options);
        if (options.aggregateResultPah) {
            TestResultAggreagate_1.default.resultFilePath = options.aggregateResultPah;
            if (options.isResetResult !== false)
                Promise.all([this.resetTestResults()]);
        }
    }
    async resetTestResults() {
        await TestResultAggreagate_1.default.setResult2File(TestResultAggreagate_1.default.result);
    }
    onSuiteStart(test) {
        this.startTime = (0, moment_1.default)();
        if (test.type == "feature")
            process.stdout.write(`${esc.sp}${esc.sp}Feature: ${test.title}${esc.nl}`);
        else
            process.stdout.write(`${esc.sp}${esc.sp}${esc.sp}${esc.sp}Suite: ${test.title}${esc.nl}`);
    }
    onTestPass(test) {
        process.stdout.write(`✓ ${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${test.title}${esc.nl}`);
    }
    onTestFail(test) {
        // process.stdout.write(`𐄂 ${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${test.title}${esc.nl}
        //     ${esc.nl}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${test.error.message}${esc.nl}
        //     ${esc.nl}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${test.error.stack}${esc.nl}
        // `)
    }
    onTestSkip(test) {
        process.stdout.write(`⎯ ${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${test.title}${esc.nl}`);
    }
    async onSuiteEnd() {
        if (!suiteEndOnce)
            return;
        suiteEndOnce = false;
        this.endTime = (0, moment_1.default)();
        const results = this.counts;
        const total = results.failures + results.passes + results.skipping;
        TestResultAggreagate_1.default.result = await TestResultAggreagate_1.default.getResultFromFile();
        TestResultAggreagate_1.default.result.TestStatus.PASSED += results.passes;
        TestResultAggreagate_1.default.result.TestStatus.FAILED += results.failures;
        TestResultAggreagate_1.default.result.TestStatus.SKIPPED += results.skipping;
        await TestResultAggreagate_1.default.setResult2File(TestResultAggreagate_1.default.result);
        process.stdout.write(total + ` test case${total > 1 ? 's' : ''} (` + results.passes + ' passed, ' + results.failures + ' failed, ' + results.skipping + ' skipped)' + esc.nl + esc.nl);
        const seconds = this.endTime.diff(this.startTime, 'seconds');
        const formatted = moment_1.default.utc(seconds * 1000).format('HH:mm:ss');
        process.stdout.write(`Total Run Time : ${formatted}`);
    }
}
exports.default = JasmineReporter;
