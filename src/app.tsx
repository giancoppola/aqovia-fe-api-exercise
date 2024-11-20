import {createRoot} from "react-dom/client";
import {Dispatch, StrictMode, useEffect, useState} from "react";
import {Box} from "@mui/material";
import {StudentTable} from "./_student-table";
import {AddStudentForm} from "./_add-student";

export interface ApiCompletionInterface {
    complete: boolean;
    msg: string;
}

export const AddStudentApiCall = async (student: StudentInterface): Promise<ApiCompletionInterface> => {
    let response = await fetch('api/students', {
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
    })
    let data = await response.json();
    let returnVal = {
        complete: false,
        msg: ''
    }
    if ('firstName' in data){
        returnVal.complete = true;
        msg: ''
    }
    else {
        returnVal.complete = false;
        msg: data.detail;
    }
    return returnVal;
}

export interface StudentInterface {
    firstName: string;
    lastName: string;
    dob: string;
    degree: string;
    id: string;
}
export type LoadingState = 'loading' | 'failed' | 'complete';
export const DobRegex = /\d\d\d\d-\d\d-\d\d/gm;

const App = () => {
    const [studentData, setStudentData]: [StudentInterface[], Dispatch<StudentInterface[]>] = useState<StudentInterface[]>([]);
    const [loading, setLoading]: [LoadingState, Dispatch<LoadingState>] = useState<LoadingState>('complete');
    const [loadingErrorMsg, setLoadingErrorMsg] = useState<string>('');
    const FetchStudentData = async () => {
        try {
            setLoadingErrorMsg('');
            setLoading('loading');
            let response = await fetch("/api/students");
            let data = await response.json();
            setLoading('complete');
            console.log(data);
            setStudentData(data);
        }
        catch(e) {
            setLoading('failed');
            setLoadingErrorMsg((e as Error).message);
            console.log(e);
        }
    }
    useEffect(() => {
        FetchStudentData();
    }, [])
    return (
        <StrictMode>
            <Box display='flex' flexDirection='column' maxWidth='1200px' padding='4rem' gap='3rem' justifyContent='center' alignItems='center'>
                <StudentTable studentData={studentData} />
                <AddStudentForm FetchStudentData={FetchStudentData} />
            </Box>
        </StrictMode>
    )
}

const root = createRoot(document.getElementById('app')!);
root.render(<App/>)