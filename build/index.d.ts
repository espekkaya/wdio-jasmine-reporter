import WDIOReporter from '@wdio/reporter';
export default class JasmineReporter extends WDIOReporter {
    startTime: any;
    endTime: any;
    constructor(options: any);
    resetTestResults(): Promise<void>;
    onSuiteStart(test: any): void;
    onTestPass(test: any): void;
    onTestFail(test: any): void;
    onTestSkip(test: any): void;
    onSuiteEnd(): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map