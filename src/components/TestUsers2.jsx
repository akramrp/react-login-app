import React, {useEffect } from "react";
import { Typography } from "@mui/material";
import style from '../assets/css/custom.module.css'

const TestUsers2 = (props) => {    
    useEffect(()=>{
        console.log('userEffect for count')
    }, [props.count, props.data])

    return (
        <>
           <Typography variant='h4'>Count: {props.count}, Data: {props.data}</Typography>
           <Typography style={{backgroundColor:"black", color:"red"}}>Count: {props.count}, Data: {props.data}</Typography>
           <Typography className={style.style2}>Count: {props.count}, Data: {props.data}</Typography>
        </>
    )
}

export default TestUsers2;