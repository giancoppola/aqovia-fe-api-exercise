"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentTable = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var StudentTable = function (props) {
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { width: '100%', children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: 'h3', fontWeight: '600', children: "All Students" }), (0, jsx_runtime_1.jsx)(material_1.TableContainer, { children: (0, jsx_runtime_1.jsxs)(material_1.Table, { children: [(0, jsx_runtime_1.jsx)(material_1.TableHead, { children: (0, jsx_runtime_1.jsxs)(material_1.TableRow, { children: [(0, jsx_runtime_1.jsx)(material_1.TableCell, { children: "ID" }), (0, jsx_runtime_1.jsx)(material_1.TableCell, { children: "First Name" }), (0, jsx_runtime_1.jsx)(material_1.TableCell, { children: "Last Name" }), (0, jsx_runtime_1.jsx)(material_1.TableCell, { children: "Degree" }), (0, jsx_runtime_1.jsx)(material_1.TableCell, { children: "DOB" })] }) }), (0, jsx_runtime_1.jsx)(material_1.TableBody, { children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: props.studentData.map(function (student) {
                                    return (0, jsx_runtime_1.jsxs)(material_1.TableRow, { children: [(0, jsx_runtime_1.jsx)(material_1.TableCell, { children: student.id }), (0, jsx_runtime_1.jsx)(material_1.TableCell, { children: student.firstName }), (0, jsx_runtime_1.jsx)(material_1.TableCell, { children: student.lastName }), (0, jsx_runtime_1.jsx)(material_1.TableCell, { children: student.degree }), (0, jsx_runtime_1.jsx)(material_1.TableCell, { children: student.dob })] }, student.id);
                                }) }) })] }) })] }));
};
exports.StudentTable = StudentTable;
