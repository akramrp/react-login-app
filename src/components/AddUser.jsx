import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { FormControl, FormGroup, Input, InputLabel, Typography, Button } from "@mui/material";
import { addUser } from "../services/apis";

const userInitValue = {name:'', username:'', email:'', phone:'', password:''}

const AddUser = () => {
    
    const [user, setUser] = useState(userInitValue);
    const {name, username, email, phone, password} = user;
    const navigate = useNavigate();

    const onChangeValue = (e) => {
        // console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const submitUserDetails = async () => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <FormGroup style={{width: '50%' }}>
        <Typography> REGISTRATION FORM </Typography>
        <Typography>&nbsp;</Typography>
            <FormControl>
                <InputLabel htmlFor="name">Name:</InputLabel>
                <Input type="text" name="name" onChange={(e) => onChangeValue(e)} value={name} />
            </FormControl>
            &nbsp;
            <FormControl>
                <InputLabel htmlFor="username">Username:</InputLabel>
                <Input type="text" name="username" onChange={(e) => onChangeValue(e)} value={username} />
            </FormControl>
            &nbsp;
            <FormControl>
                <InputLabel htmlFor="email">Email:</InputLabel>
                <Input type="text" name="email" onChange={(e) => onChangeValue(e)} value={email} />
            </FormControl>
            &nbsp;
            <FormControl>
                <InputLabel htmlFor="phone">Phone:</InputLabel>
                <Input type="text" name="phone" onChange={(e) => onChangeValue(e)} value={phone} />
            </FormControl>
            &nbsp;
            <FormControl>
                <InputLabel htmlFor="password">Password:</InputLabel>
                <Input type="password" name="password" onChange={(e) => onChangeValue(e)} value={password} />
            </FormControl>
            &nbsp;
            <FormControl>
                <Button color="primary" variant="contained" onClick={() => submitUserDetails()} >Submit</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;