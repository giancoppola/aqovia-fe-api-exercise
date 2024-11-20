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
exports.AddStudentForm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = require("react");
var app_1 = require("./app");
var AddStudentForm = function (props) {
    var _a = (0, react_1.useState)(""), firstName = _a[0], setFirstName = _a[1];
    var _b = (0, react_1.useState)(""), lastName = _b[0], setLastName = _b[1];
    var _c = (0, react_1.useState)(""), degree = _c[0], setDegree = _c[1];
    var _d = (0, react_1.useState)(""), dob = _d[0], setDob = _d[1];
    var _e = (0, react_1.useState)(""), error = _e[0], setError = _e[1];
    var _f = (0, react_1.useState)(false), formValid = _f[0], setFormValid = _f[1];
    var AddStudent = function () { return __awaiter(void 0, void 0, void 0, function () {
        var newStudent, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newStudent = {
                        firstName: firstName,
                        lastName: lastName,
                        degree: degree,
                        dob: dob,
                        id: ''
                    };
                    return [4 /*yield*/, (0, app_1.AddStudentApiCall)(newStudent)];
                case 1:
                    res = _a.sent();
                    console.log("ApiResult", res);
                    if (!res.complete) {
                        setError(res.msg);
                        return [2 /*return*/];
                    }
                    if (res.complete) {
                        setFirstName('');
                        setLastName('');
                        setDegree('');
                        setDob('');
                    }
                    console.log('here now');
                    props.FetchStudentData();
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        setError("");
        var errMsg = '';
        if (firstName.length < 2) {
            errMsg = 'Please provide a first name';
        }
        ;
        if (lastName.length < 2) {
            errMsg = 'Please provide a last name';
        }
        ;
        if (degree.length < 2) {
            errMsg = 'Please provide a degree name';
        }
        ;
        if (firstName.length > 40) {
            errMsg = 'Please provide a shorter first name';
        }
        ;
        if (lastName.length > 40) {
            errMsg = 'Please provide a shorter first name';
        }
        ;
        if (degree.length > 40) {
            errMsg = 'Please provide a shorter degree name';
        }
        ;
        if (!dob.match(app_1.DobRegex)) {
            errMsg = 'Please provide a date of birth in the format of YYYY-MM-DD';
        }
        ;
        if (parseInt(dob.split('-')[0]) > 2006) {
            errMsg = 'Student too young';
        }
        ;
        if (parseInt(dob.split('-')[0]) < 1995) {
            errMsg = 'Student too old';
        }
        ;
        if (errMsg) {
            setError(errMsg);
            setFormValid(false);
        }
        else {
            setFormValid(true);
        }
    }, [firstName, lastName, degree, dob]);
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { width: '100%', children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: 'h3', fontWeight: '600', children: "Add a Student" }), (0, jsx_runtime_1.jsxs)(material_1.Box, { padding: '2rem', display: "flex", flexDirection: "column", gap: '1rem', children: [(0, jsx_runtime_1.jsx)(material_1.TextField, { fullWidth: true, label: 'First Name', placeholder: 'First Name', value: firstName, required: true, onChange: function (e) { return setFirstName(e.target.value); } }), (0, jsx_runtime_1.jsx)(material_1.TextField, { fullWidth: true, label: 'Last Name', placeholder: 'Last Name', value: lastName, required: true, onChange: function (e) { return setLastName(e.target.value); } }), (0, jsx_runtime_1.jsx)(material_1.TextField, { fullWidth: true, label: 'Degree', placeholder: 'Degree', value: degree, required: true, onChange: function (e) { return setDegree(e.target.value); } }), (0, jsx_runtime_1.jsx)(material_1.TextField, { fullWidth: true, label: 'Date of Birth', placeholder: 'YYYY-MM-DD', value: dob, required: true, onChange: function (e) { return setDob(e.target.value); } }), (0, jsx_runtime_1.jsx)(material_1.Button, { fullWidth: true, variant: "contained", disabled: !formValid, onClick: AddStudent, children: "Add" })] }), error &&
                (0, jsx_runtime_1.jsx)(material_1.Typography, { color: 'error', children: error })] }));
};
exports.AddStudentForm = AddStudentForm;
