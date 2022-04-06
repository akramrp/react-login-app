import React, { useRef } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import TestFileHooks from './TestFileHooks'

const TestUseForwardRefHook = () => {
    // useRef  forward parent data to child
    // 

    const inputValue = useRef(null)
    function updateInput(){
        inputValue.current.value='1000'
        inputValue.current.style.color='red'
        inputValue.current.focus()
    }

    return (
        <>
            <Box>
                <Typography variant='h5'> ------------------ Forward Ref hook ------------------ </Typography>
                <Box>
                    <TestFileHooks ref={inputValue}/>
                    <Button variant="contained" color="success" size="small" onClick={updateInput}>updateInput</Button>
                </Box>
            </Box>
        </>
    )
}

export default TestUseForwardRefHook;