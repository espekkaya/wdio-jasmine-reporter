"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var reporter_1 = require("@wdio/reporter");
var moment_1 = require("moment");
var TestResultAggreagate_1 = require("./common/TestResultAggreagate");
var esc = {
    sp: '\u0020',
    nl: '\n'
};
var suiteEndOnce = true;
var MochaReporter = /** @class */ (function (_super) {
    __extends(MochaReporter, _super);
    function MochaReporter(options) {
        var _this = this;
        /*
         * make reporter to write to the output stream by default
         */
        options = Object.assign(options, { stdout: true });
        _this = _super.call(this, options) || this;
        if (options.aggregateResultPah) {
            TestResultAggreagate_1["default"].resultFilePath = options.aggregateResultPah;
            if (options.isResetResult !== false)
                Promise.all([_this.resetTestResults()]);
        }
        return _this;
    }
    MochaReporter.prototype.resetTestResults = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, TestResultAggreagate_1["default"].setResult2File(TestResultAggreagate_1["default"].result)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MochaReporter.prototype.onSuiteStart = function (test) {
        this.startTime = (0, moment_1["default"])();
        if (test.type == "feature")
            process.stdout.write("".concat(esc.sp).concat(esc.sp, "Feature: ").concat(test.title).concat(esc.nl));
        else
            process.stdout.write("".concat(esc.sp).concat(esc.sp).concat(esc.sp).concat(esc.sp, "Suite: ").concat(test.title).concat(esc.nl));
    };
    MochaReporter.prototype.onTestPass = function (test) {
        process.stdout.write("\u2713 ".concat(esc.sp).concat(esc.sp).concat(esc.sp).concat(esc.sp).concat(esc.sp).concat(esc.sp).concat(test.title).concat(esc.nl));
    };
    MochaReporter.prototype.onTestFail = function (test) {
        // process.stdout.write(`𐄂 ${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${test.title}${esc.nl}
        //     ${esc.nl}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${test.error.message}${esc.nl}
        //     ${esc.nl}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${esc.sp}${test.error.stack}${esc.nl}
        // `)
    };
    MochaReporter.prototype.onTestSkip = function (test) {
        process.stdout.write("\u23AF ".concat(esc.sp).concat(esc.sp).concat(esc.sp).concat(esc.sp).concat(esc.sp).concat(esc.sp).concat(test.title).concat(esc.nl));
    };
    MochaReporter.prototype.onSuiteEnd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var results, total, _a, seconds, formatted;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!suiteEndOnce)
                            return [2 /*return*/];
                        suiteEndOnce = false;
                        this.endTime = (0, moment_1["default"])();
                        results = this.counts;
                        total = results.failures + results.passes + results.skipping;
                        _a = TestResultAggreagate_1["default"];
                        return [4 /*yield*/, TestResultAggreagate_1["default"].getResultFromFile()];
                    case 1:
                        _a.result = _b.sent();
                        TestResultAggreagate_1["default"].result.TestStatus.PASSED += results.passes;
                        TestResultAggreagate_1["default"].result.TestStatus.FAILED += results.failures;
                        TestResultAggreagate_1["default"].result.TestStatus.SKIPPED += results.skipping;
                        return [4 /*yield*/, TestResultAggreagate_1["default"].setResult2File(TestResultAggreagate_1["default"].result)];
                    case 2:
                        _b.sent();
                        process.stdout.write(total + " test case".concat(total > 1 ? 's' : '', " (") + results.passes + ' passed, ' + results.failures + ' failed, ' + results.skipping + ' skipped)' + esc.nl + esc.nl);
                        seconds = this.endTime.diff(this.startTime, 'seconds');
                        formatted = moment_1["default"].utc(seconds * 1000).format('HH:mm:ss');
                        process.stdout.write("Total Run Time : ".concat(formatted));
                        return [2 /*return*/];
                }
            });
        });
    };
    return MochaReporter;
}(reporter_1["default"]));
exports["default"] = MochaReporter;
