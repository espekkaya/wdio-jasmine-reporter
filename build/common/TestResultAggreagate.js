"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Fs_1 = __importDefault(require("./lib/Fs"));
class TestResultAggregate {
    constructor() {
        this.path = '';
        this.results = {
            TestStatus: {
                PASSED: 0,
                FAILED: 0,
                SKIPPED: 0,
            },
        };
    }
    get resultFilePath() {
        return this.path;
    }
    set resultFilePath(path) {
        this.path = path;
    }
    get result() {
        return this.results;
    }
    set result(value) {
        this.results = value;
    }
    async getResultFromFile() {
        if (await Fs_1.default.isFile(this.path))
            return JSON.parse(await Fs_1.default.readFile(this.path));
        return this.results;
    }
    async setResult2File(result) {
        await Fs_1.default.writeFile(this.path, JSON.stringify(result));
    }
}
exports.default = new TestResultAggregate();
