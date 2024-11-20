import {Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {StudentInterface} from "./app";

interface StudentTableProps {
    studentData: StudentInterface[];
}

export const StudentTable = (props: StudentTableProps) => {
    return (
        <Box width='100%'>
            <Typography variant='h3' fontWeight='600'>All Students</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Degree</TableCell>
                            <TableCell>DOB</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <>
                            {props.studentData.map((student: StudentInterface) =>
                                <TableRow key={student.id}>
                                    <TableCell>{student.id}</TableCell>
                                    <TableCell>{student.firstName}</TableCell>
                                    <TableCell>{student.lastName}</TableCell>
                                    <TableCell>{student.degree}</TableCell>
                                    <TableCell>{student.dob}</TableCell>
                                </TableRow>
                            )}
                        </>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}