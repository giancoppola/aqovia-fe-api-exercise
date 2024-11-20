"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var client_1 = require("react-dom/client");
var react_1 = require("react");
var material_1 = require("@mui/material");
var App = function () {
    // const [studentData, setStudentData]: [Array<StudentInterface>, Dispatch<Array<StudentInterface> | null>] = useState(null);
    (0, react_1.useEffect)(function () {
        try {
            fetch('/api/students')
                .then(function (res) { return res.json(); })
                .then(function (data) { console.log(data); });
        }
        catch (e) {
            console.log(e);
        }
    }, []);
    return ((0, jsx_runtime_1.jsx)(react_1.StrictMode, { children: (0, jsx_runtime_1.jsx)(material_1.Box, {}) }));
};
var root = (0, client_1.createRoot)(document.getElementById('app'));
root.render((0, jsx_runtime_1.jsx)(App, {}));
