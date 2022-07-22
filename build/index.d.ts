import WDIOReporter from '@wdio/reporter';
export default class JasmineReporter extends WDIOReporter {
    constructor(options: any);
    onSuiteStart(test: any): void;
    onTestPass(test: any): void;
    onTestFail(test: any): void;
    onTestSkip(test: any): void;
    onSuiteEnd(): void;
}
//# sourceMappingURL=index.d.ts.map