"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter_1 = __importDefault(require("@wdio/reporter"));
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
    }
    onSuiteStart(test) {
        if (test.type == "feature")
            process.stdout.write(`${esc.sp}${esc.sp}Feature: ${test.title}${esc.nl}`);
        else
            process.stdout.write(`${esc.sp}${esc.sp}${esc.sp}${esc.sp}Scenario: ${test.title}${esc.nl}`);
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
    onSuiteEnd() {
        if (!suiteEndOnce)
            return;
        suiteEndOnce = false;
        const results = this.counts;
        const total = results.failures + results.passes + results.skipping;
        process.stdout.write(total + ' test case(s) (' + results.passes + ' passed, ' + results.failures + ' failed, ' + results.skipping + ' skipped)' + esc.nl + esc.nl);
    }
}
exports.default = JasmineReporter;
