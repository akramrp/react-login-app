import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import {Home } from '@material-ui/icons'
import TestUsers  from './TestUsers'
import TestForm  from './TestForm'
import TestLifeCycle  from './TestLifeCycle'

const TestPage = () => {
    return (
        <>
            <Box>
                <Typography variant='h4'> <Home fontSize="large" /> Code for CRUD </Typography>
                <Box>
                    <h2>Welcome!! to TestPage</h2>
                    <h2>akramrp7@gmail.com</h2>
                </Box>
            </Box>
            <TestUsers />
            <TestForm />
            <TestLifeCycle />
        </>
    )
}

export default TestPage;