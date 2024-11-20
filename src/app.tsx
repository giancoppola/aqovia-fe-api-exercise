import {createRoot} from "react-dom/client";
import {Dispatch, StrictMode, useEffect, useState} from "react";
import {Box} from "@mui/material";

interface StudentInterface {
    "firstName": string,
    "lastName": string,
    "dob": Date,
    "degree": string,
    "id": string
}

const App = () => {
    // const [studentData, setStudentData]: [Array<StudentInterface>, Dispatch<Array<StudentInterface> | null>] = useState(null);
    useEffect(() => {
        try {
            fetch('/api/students')
                .then((res) => res.json())
                .then((data) => {console.log(data)})
        }
        catch(e) {
            console.log(e);
        }
    }, [])
    return (
        <StrictMode>
            <Box>

            </Box>
        </StrictMode>
    )
}

const root = createRoot(document.getElementById('app')!);
root.render(<App/>)