import WDIOReporter from '@wdio/reporter';
export default class MochaReporter extends WDIOReporter {
    startTime: any;
    endTime: any;
    constructor(options: any);
    resetTestResults(): any;
    onSuiteStart(test: any): void;
    onTestPass(test: any): void;
    onTestFail(test: any): void;
    onTestSkip(test: any): void;
    onSuiteEnd(): any;
}
//# sourceMappingURL=index.d.ts.map