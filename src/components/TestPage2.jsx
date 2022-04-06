import React, {useState } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {Home } from '@material-ui/icons'
import TestUsers2 from './TestUsers2'

const TestPage2 = () => {
    const [data, setData] = useState(100)
    const [count, setCount] = useState(0)
    
    /*
    useEffect(()=>{
        console.log('userEffect for count')
    }, [count])
    
    useEffect(()=>{
        console.log('userEffect for data')
    }, [data])
    */
    return (
        <>
            <Box>
                <Typography variant='h4'> <Home fontSize="large" /> Code for CRUD </Typography>
                <Box>
                    <TestUsers2  count={count} data={data} />
                    <Button variant='contained' onClick={()=>setCount(count+1)}>counter</Button>
                    <Button variant='contained' onClick={()=>setData(data+1)}>data</Button>
                </Box>
            </Box>
        </>
    )
}

export default TestPage2;