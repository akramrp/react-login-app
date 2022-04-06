import { Button, Typography  } from "@mui/material";
import React, {useState} from "react";
import { Mouse, Add } from '@material-ui/icons';

const TestUsers = () => {
    const [title, setTitle] = useState('Hello Akram')
    const [counter, setCounter] = useState(1)
    const [toggle, setToggle] = useState(true)


    function changeState(){
        setTitle('Hello Akram Saif After Click')
    }
    return (
        <>
            <h2>{title}</h2>
            <h2>Counter: {counter}</h2>
            <Button 
                onClick={changeState}
                color="error" 
                variant="contained" 
                size="small"> 
                OnClick change state 
            </Button>
             - 
            <Button 
                // onClick={UserFun()}             // auto call when page load
                // onClick={alert('hello user')}   // auto call when page load
                onClick={() => setCounter(counter+1)}   // auto call when page load
                // onClick={UserFun}
                color="primary" 
                variant="contained" 
                size="small"> 
                <Add /> counter-btn
            </Button>
            <br/>
            <br/>
            <Button
                onClick={()=>setToggle(!toggle)}
                color="success" 
                variant="contained" 
                size="small"> 
                <Mouse /> Toggle
            </Button>
            <Typography> { toggle ? 'true ==> This is toggle content' : null } </Typography>
            <br />
            <br />
        </>
    )
}
export default TestUsers;