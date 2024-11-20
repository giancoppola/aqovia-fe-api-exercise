import {Box, Button, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {AddStudentApiCall, ApiCompletionInterface, DobRegex, StudentInterface} from "./app";

interface AddStudentFormProps {
    FetchStudentData: Function;
}
export const AddStudentForm = (props: AddStudentFormProps) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [degree, setDegree] = useState("");
    const [dob, setDob] = useState("");
    const [error, setError] = useState("");
    const [formValid, setFormValid] = useState(false);
    const AddStudent = async () => {
        let newStudent: StudentInterface = {
            firstName: firstName,
            lastName: lastName,
            degree: degree,
            dob: dob,
            id: ''
        }
        let res: ApiCompletionInterface = await AddStudentApiCall(newStudent);
        console.log("ApiResult", res);
        if (!res.complete) {setError(res.msg); return;}
        if (res.complete) {
            setFirstName('');
            setLastName('');
            setDegree('');
            setDob('');
        }
        console.log('here now');
        props.FetchStudentData();
    }
    useEffect(() => {
        setError("");
        let errMsg: string = '';
        if (firstName.length < 2) {errMsg = 'Please provide a first name'};
        if (lastName.length < 2) {errMsg = 'Please provide a last name'};
        if (degree.length < 2) {errMsg = 'Please provide a degree name'};
        if (firstName.length > 40) {errMsg = 'Please provide a shorter first name'};
        if (lastName.length > 40) {errMsg = 'Please provide a shorter first name'};
        if (degree.length > 40) {errMsg = 'Please provide a shorter degree name'};
        if (!dob.match(DobRegex)) {errMsg = 'Please provide a date of birth in the format of YYYY-MM-DD'};
        if (parseInt(dob.split('-')[0]) > 2006) {errMsg = 'Student too young'};
        if (parseInt(dob.split('-')[0]) < 1995) {errMsg = 'Student too old'};
        if (errMsg) {setError(errMsg); setFormValid(false)}
        else {setFormValid(true);}
    }, [firstName, lastName, degree, dob]);
    return (
        <Box width='100%'>
            <Typography variant='h3' fontWeight='600'>Add a Student</Typography>
            <Box padding='2rem' display="flex" flexDirection="column" gap='1rem'>
                <TextField
                fullWidth
                label='First Name'
                placeholder='First Name'
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                fullWidth
                label='Last Name'
                placeholder='Last Name'
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                fullWidth
                label='Degree'
                placeholder='Degree'
                value={degree}
                required
                onChange={(e) => setDegree(e.target.value)}
                />
                <TextField
                fullWidth
                label='Date of Birth'
                placeholder='YYYY-MM-DD'
                value={dob}
                required
                onChange={(e) => setDob(e.target.value)}
                />
                <Button
                fullWidth
                variant="contained"
                disabled={!formValid}
                onClick={AddStudent}
                >Add</Button>
            </Box>
            { error &&
                <Typography color='error'>{error}</Typography>
            }
        </Box>
    )
}