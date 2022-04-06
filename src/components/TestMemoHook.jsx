import React, {useState, useMemo } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const TestMemoHook = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(100)
    // pureComponent in class, useMemo in hooks
    // if same content render 2nd or more time then it useMemo hook prevent its nature
    // useMemo method render only 1 time duplicate content it enhance performence of component
    // prevent unwanted calling of function
    const multicountMemo = useMemo(()=>{
        console.log('calling multicountMemo ====> useMemo')
        return count*5;
    }, [count])

    return (
        <>
            <Box>
                <Typography variant='h5'> ------------------ useMemo hook ------------------ </Typography>
                <Box>
                    <Typography variant='h5'> count: {count},  item: {item}, multicountMemo: {multicountMemo}</Typography>
                    {/* <Button variant='contained' onClick={()=>setCount(1)}>counter</Button> */} 
                    <Button variant='contained' onClick={()=>setCount(count+1)}>counter</Button>
                    - <Button variant='contained' onClick={()=>setItem(item+1)}>item</Button>
                </Box>
            </Box>
        </>
    )
}

export default TestMemoHook;