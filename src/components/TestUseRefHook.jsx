import React, {useState, useEffect, useRef } from "react";
import { Button, Typography, Input } from "@mui/material";
import { Box } from "@mui/system";

const TestUseRefHook = () => {
    // useRef use in emergency case
    // useRef manipulate directly DOM, its not good for DOM
    // use of useRef in for submittinf bcoz on submitting we use validation, change color of input box and change state
    // 
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    const previousInputValue = useRef("");

    useEffect(() => {
        count.current = count.current + 1;
        previousInputValue.current = inputValue;
    }, [inputValue]);


    const inputElement = useRef();
    const focusInput = () => {
        inputElement.current.focus();
    };

    return (
        <>
            <Box>
                <Typography variant='h5'> ------------------ useRef hook ------------------ </Typography>
                <Box>
                    <Input type="text" ref={inputElement} />
                    <Button variant="contained" color="success" size="small" onClick={focusInput}>Focus Input</Button><br />
                    <Input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <Typography variant='h5'> Render Count: {count.current}</Typography>
                    <Typography variant='h5'> Current Value: {inputValue}</Typography>
                    <Typography variant='h5'> Previous Value: {previousInputValue.current}</Typography>
                </Box>
            </Box>
        </>
    )
}

export default TestUseRefHook;