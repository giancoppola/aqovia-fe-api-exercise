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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DobRegex = exports.AddStudentApiCall = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var client_1 = require("react-dom/client");
var react_1 = require("react");
var material_1 = require("@mui/material");
var _student_table_1 = require("./_student-table");
var _add_student_1 = require("./_add-student");
var AddStudentApiCall = function (student) { return __awaiter(void 0, void 0, void 0, function () {
    var response, data, returnVal;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch('api/students', {
                    "method": 'POST',
                    "headers": {
                        "Content-Type": "application/json",
                    },
                    "body": JSON.stringify({
                        "firstName": student.firstName,
                        "lastName": student.lastName,
                        "dob": student.dob,
                        "degree": student.degree
                    })
                })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                returnVal = {
                    complete: false,
                    msg: ''
                };
                if ('firstName' in data) {
                    returnVal.complete = true;
                    msg: '';
                }
                else {
                    returnVal.complete = false;
                    msg: data.detail;
                }
                return [2 /*return*/, returnVal];
        }
    });
}); };
exports.AddStudentApiCall = AddStudentApiCall;
exports.DobRegex = /\d\d\d\d-\d\d-\d\d/gm;
var App = function () {
    var _a = (0, react_1.useState)([]), studentData = _a[0], setStudentData = _a[1];
    var _b = (0, react_1.useState)('complete'), loading = _b[0], setLoading = _b[1];
    var _c = (0, react_1.useState)(''), loadingErrorMsg = _c[0], setLoadingErrorMsg = _c[1];
    var FetchStudentData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    setLoadingErrorMsg('');
                    setLoading('loading');
                    return [4 /*yield*/, fetch("/api/students")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    setLoading('complete');
                    console.log(data);
                    setStudentData(data);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    setLoading('failed');
                    setLoadingErrorMsg(e_1.message);
                    console.log(e_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        FetchStudentData();
    }, []);
    return ((0, jsx_runtime_1.jsx)(react_1.StrictMode, { children: (0, jsx_runtime_1.jsxs)(material_1.Box, { display: 'flex', flexDirection: 'column', maxWidth: '1200px', padding: '4rem', gap: '3rem', justifyContent: 'center', alignItems: 'center', children: [(0, jsx_runtime_1.jsx)(_student_table_1.StudentTable, { studentData: studentData }), (0, jsx_runtime_1.jsx)(_add_student_1.AddStudentForm, { FetchStudentData: FetchStudentData })] }) }));
};
var root = (0, client_1.createRoot)(document.getElementById('app'));
root.render((0, jsx_runtime_1.jsx)(App, {}));
