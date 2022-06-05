import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FormControl, FormGroup, Input, InputLabel, Typography, Button, Divider, Chip, Grid, Paper, Box } from "@mui/material";
import { Login } from "../services/apis";

const userInitValue = { email: '', password: '' }

const AddUser = () => {

    const [user, setUser] = useState(userInitValue);
    const { email, password } = user;
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("loginData");
        if (auth)
            navigate('/');
    }, [])

    const onChangeValue = (e) => {
        // console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const submitLogin = async () => {
        const res = await Login(user);
        // console.log(res);
        if (res.data.error) {
            alert(res.data.error);
        }
        else {
            let userObj = res.data;
            delete userObj.password;
            localStorage.setItem('loginData', JSON.stringify(userObj));
            console.log("Success😊\nYou are login now.");
            navigate('/profile');
        }
    }

    /*
    // fetch apis for login
    let result = await fetch('http://localhost:3001/user/login', {
        method: 'post',
        body: JSON.stringify({email,password}),
        headers: {
            'Content-Type': 'application/json' 
        }
    });
    result = await result.json();
    console.log(result);
    */

    return (
        <Grid
            container
            gap={2}
            direction="row"
            justify="center"
            sx={{ margin: 1, justifyContent: 'center' }}
        >
            <Grid item md={5} sm={6}>
                <Paper elevation={10}>
                    <Box p={5} textAlign="justify">
                        <Typography variant="h5" align="center">Lorem-Text-150</Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero neque necessitatibus ratione ut ab ipsam mollitia blanditiis ullam molestiae accusantium, sapiente, sed debitis, veritatis eius quod magni eos cum iusto enim delectus consequatur voluptatem. Consequatur sequi esse voluptatibus nobis ea illo harum obcaecati necessitatibus beatae temporibus! At fuga id blanditiis excepturi quas suscipit nisi minus. Assumenda explicabo pariatur nemo iste minima deleniti, quia quod, itaque reiciendis at distinctio quisquam odio similique excepturi sapiente odit, quae neque porro quos quis? Quod est ab architecto temporibus. Neque aspernatur iure maiores illo numquam laborum dolores culpa enim laboriosam itaque molestiae ipsa minima atque consectetur dignissimos voluptatem impedit aliquam saepe doloribus, nesciunt, officiis, perspiciatis ducimus. Voluptatum consequatur perspiciatis debitis, natus numquam dolorum porro impedit, minus eveniet amet dolorem nihil quaerat totam vel atque eaque consequuntur, inventore dolor sapiente? Illo quia obcaecati vitae rem eaque minima nemo iusto, inventore magnam, a odit quos ab.
                    </Box>
                </Paper>
            </Grid>
            <Grid item md={5} sm={6}>
                <Paper elevation={10}>
                    <Box p={5} textAlign="justify">
                        <Typography variant="h5" align="center">WELCOME, LOGIN-SYSTEM</Typography>
                        <FormGroup>
                            <Divider><Chip color="success" variant="outlined" size="small" label="for-demo-credential" /></Divider>
                            <Typography> Email: akramrp7@gmail.com</Typography>
                            <Typography>Password: 123</Typography>
                            <Divider><Chip color="success" variant="outlined" size="small" label="for-demo-credential" /></Divider>
                            <FormControl>
                                <InputLabel htmlFor="email">Email:</InputLabel>
                                <Input type="email" name="email" onChange={(e) => onChangeValue(e)} value={email} />
                            </FormControl>
                            &nbsp;
                            <FormControl>
                                <InputLabel htmlFor="password">Password:</InputLabel>
                                <Input type="password" name="password" onChange={(e) => onChangeValue(e)} value={password} />
                            </FormControl>
                            &nbsp;
                            <FormControl>
                                <Button color="primary" variant="contained" onClick={() => submitLogin()} >Login</Button>
                            </FormControl>
                        </FormGroup>
                    </Box>
                </Paper>
            </Grid>
            <Grid item md={5} sm={6}>
                <Paper elevation={10}>
                    <Box p={5} textAlign="justify">
                        <Typography variant="h5" align="center">Lorem-Text-50</Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptatum quam neque perspiciatis ullam et nesciunt doloremque saepe voluptatibus sed enim tempore possimus voluptate ut quasi atque eum illum numquam eveniet? Dicta laboriosam soluta atque cum ut voluptates corporis corrupti eos commodi, et quisquam dignissimos provident dolore iste, itaque enim.
                    </Box>
                </Paper>
            </Grid>
            <Grid item md={5} sm={6}>
                <Paper elevation={10}>
                    <Box p={5} textAlign="justify">
                        <Typography variant="h5" align="center">Lorem-Text-50</Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptatum quam neque perspiciatis ullam et nesciunt doloremque saepe voluptatibus sed enim tempore possimus voluptate ut quasi atque eum illum numquam eveniet? Dicta laboriosam soluta atque cum ut voluptates corporis corrupti eos commodi, et quisquam dignissimos provident dolore iste, itaque enim.
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default AddUser;