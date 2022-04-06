import React, {useState } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const TestgetPreviousState = () => {
    const [count, setCount] = useState(0)
    const [previous, setPrevious] = useState(0)
    function updateValue(){
        let rand = Math.floor(Math.random()*10)

        setCount((previousValue)=>{     // its take a callback function
            setPrevious(previousValue)
            return rand;
        })
    }
    return (
        <>
            <Box>
                <Typography variant='h5'> ------------------  how to find previous state  ------------------ </Typography>
                <Box>
                    <Typography variant='h6'>Previous State: {previous}</Typography>
                    <Typography variant='h6'>Current State: {count}</Typography>
                    <Button variant='contained' onClick={updateValue}>updateStateBtn</Button>
                </Box>
            </Box>
        </>
    )
}

export default TestgetPreviousState;