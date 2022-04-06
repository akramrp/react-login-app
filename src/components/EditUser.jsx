import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { FormControl, FormGroup, Input, InputLabel, Typography, Button } from "@mui/material";
import { editUser, getUsers } from "../services/apis";

const userInitValue = {name:'', username:'', email:'', phone:'', password:""}

const EditUser = () => {
    
    const [user, setUser] = useState(userInitValue);
    const {name, username, email, phone, password} = user;
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async () => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const onChangeValue = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const submitUserEditDetails = async () => {
        await editUser(id, user);
        console.log('edit.......................');
        navigate('/all');
    }

    return (
        <FormGroup style={{width: '50%' }}>
        <Typography> EDIT USER FORM </Typography>
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
                <Input type="email" name="email" onChange={(e) => onChangeValue(e)} value={email} />
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
                <Button color="primary" variant="contained" onClick={() => submitUserEditDetails()} >Submit</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditUser;