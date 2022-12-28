"use strict";
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
var fs_extra_1 = require("fs-extra");
var Fs = /** @class */ (function () {
    function Fs() {
    }
    /**
     *
     * @param err
     */
    Fs.isErrorNotFound = function (err) {
        return err.code === 'ENOENT';
    };
    /**
     * Async awaited version of the check if a path resolves to a dir
     *
     * @param {string} path
     * @returns {Promise<boolean>}
     */
    Fs.prototype.isFolder = function (path) {
        return __awaiter(this, void 0, Promise, function () {
            var stats;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs_extra_1["default"].stat(path)["catch"](function (err) {
                            if (Fs.isErrorNotFound(err))
                                return false;
                            throw err;
                        })];
                    case 1:
                        stats = _a.sent();
                        // @ts-ignore
                        return [2 /*return*/, !stats ? stats : stats.isDirectory()];
                }
            });
        });
    };
    /**
     *
     * @param path
     * @returns {Promise<boolean>}
     */
    Fs.prototype.isFile = function (path) {
        return __awaiter(this, void 0, Promise, function () {
            var stats;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs_extra_1["default"].stat(path)["catch"](function (err) {
                            if (Fs.isErrorNotFound(err))
                                return false;
                            throw err;
                        })];
                    case 1:
                        stats = _a.sent();
                        // @ts-ignore
                        return [2 /*return*/, !stats ? stats : stats.isFile()];
                }
            });
        });
    };
    /**
     * Read a file
     *
     * @param {string} path
     * @returns {Promise<string>}
     */
    Fs.prototype.readFile = function (path) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fs_extra_1["default"].readFile(path, 'utf8')];
            });
        });
    };
    /**
     *
     * @param path
     * @param data
     * @returns {Promise<void>}
     */
    Fs.prototype.writeFile = function (path, data) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs_extra_1["default"].writeFile(path, data, { encoding: 'utf8', flag: 'w' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param path
     * @returns {Promise<void>}
     */
    Fs.prototype.remove = function (path) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs_extra_1["default"].remove(path)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param path
     * @returns {Promise<void>}
     */
    Fs.prototype.emptyDir = function (path) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs_extra_1["default"].emptyDir(path)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param source
     * @param destination
     * @returns {Promise<void>}
     */
    Fs.prototype.copy = function (source, destination) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs_extra_1["default"].copy(source, destination)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Fs;
}());
exports["default"] = new Fs();
