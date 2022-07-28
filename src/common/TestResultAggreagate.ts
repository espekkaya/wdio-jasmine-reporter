import Fs from './lib/Fs';

export interface TestAggregate {
    TestStatus: {
        PASSED: number;
        FAILED: number;
        SKIPPED: number;
    };
}

class TestResultAggregate {
    private path: string = '';
    private results: TestAggregate = {
        TestStatus: {
            PASSED: 0,
            FAILED: 0,
            SKIPPED: 0,
        },
    };

    public get resultFilePath(): string {
        return this.path;
    }

    public set resultFilePath(path: string) {
        this.path = path;
    }

    public get result(): TestAggregate {
        return this.results;
    }

    public set result(value: TestAggregate) {
        this.results = value;
    }

    public async getResultFromFile() {
        if (await Fs.isFile(this.path))
            return JSON.parse(await Fs.readFile(this.path));

        return this.results;
    }

    public async setResult2File(result: TestAggregate) {
        await Fs.writeFile(this.path, JSON.stringify(result));
    }
}

export default new TestResultAggregate();
