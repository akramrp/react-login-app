import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import {Home } from '@material-ui/icons'
import TestMemoHook  from './TestMemoHook'
import TestUseRefHook  from './TestUseRefHook'
import TestUseForwardRefHook  from './TestUseForwardRefHook'
// import TestReactRouting from './TestReactRouting'
import TestgetPreviousState from './TestgetPreviousState'

const TestPage = () => {
    return (
        <>
            <Box>
                <Typography variant='h4'> <Home fontSize="large" /> Code for CRUD </Typography>
            </Box>
            <TestMemoHook /> <br />
            <TestUseRefHook /> <br />
            <TestUseForwardRefHook /> <br />
            <Box>
                <Typography variant='h5'> ------------------  Refencr point  ------------------ </Typography>
                <Typography variant='h6'> 
                    1. control componet a form and atleast 1 input <br />
                    2. uncontrol component has input field but not control by state, direct js or ref  <br />
                    3. HOC (High order function) <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; HOC take componrt as a props and return a componrt <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PUT: PUT replaces the entire resource if it exists or creates new if it does not exist <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FETCH: Unlike PUT Request, PATCH does partial update e.g. Fields that need to be updated by the client, only that field is updated without modifying the other field <br />
                    <br />
                </Typography>
                <Typography variant='h6'>  </Typography>
            </Box>
            <br />
            {/* <TestReactRouting /> */}
            <TestgetPreviousState />
        </>
    )
}

export default TestPage;