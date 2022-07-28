export interface TestAggregate {
    TestStatus: {
        PASSED: number;
        FAILED: number;
        SKIPPED: number;
    };
}
declare class TestResultAggregate {
    private path;
    private results;
    get resultFilePath(): string;
    set resultFilePath(path: string);
    get result(): TestAggregate;
    set result(value: TestAggregate);
    getResultFromFile(): Promise<any>;
    setResult2File(result: TestAggregate): Promise<void>;
}
declare const _default: TestResultAggregate;
export default _default;
//# sourceMappingURL=TestResultAggreagate.d.ts.map