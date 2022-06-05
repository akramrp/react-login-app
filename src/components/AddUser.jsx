import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FormControl, FormGroup, Input, InputLabel, Typography, Button, Divider, Chip, Grid, Paper, Box } from "@mui/material";
import { addUser } from "../services/apis";

const userInitValue = { name: '', username: '', email: '', phone: '', password: '' }

const AddUser = () => {

    const [user, setUser] = useState(userInitValue);
    const { name, username, email, phone, password } = user;
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
        <Grid
            container
            gap={2}
            direction="row"
            justify="center"
            sx={{ margin: 1, justifyContent: 'center' }}
        >
            <Grid item md={5} sm={6}>
                <Paper elevation={10}>
                    <Box p={5} textAlign="justify" >
                        <Typography variant="h5" align="center">Lorem-Text-200</Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ex hic illo quidem pariatur rerum ipsam quasi? Minima cumque eum quaerat laudantium enim delectus animi temporibus velit odit iusto recusandae error numquam vel, deserunt nostrum illum hic autem ea corporis veritatis? Rem unde quas inventore magni odio nisi vero ducimus eligendi non? Adipisci rerum iusto laudantium velit, error deserunt ipsa consequatur sapiente quam, qui corrupti vel voluptate tempore iure molestias expedita quos unde. Ex, fugit quasi cupiditate modi itaque doloremque temporibus enim earum quam consectetur esse praesentium quibusdam, corrupti perspiciatis unde debitis dicta atque voluptatum ea. Totam unde voluptatum deserunt alias itaque, omnis voluptatibus corrupti quas dicta ex dolores facilis iste. Hic quos quaerat incidunt molestiae, reiciendis, obcaecati porro id cumque, quia deserunt distinctio nesciunt deleniti velit quis optio fugiat beatae officia nam placeat dolorum accusantium sit tempore. Aliquid cupiditate harum fugit repudiandae dolores, nobis, cum, obcaecati quas earum quae exercitationem fugiat veritatis? Voluptatem sint cum omnis ipsum, quo repellat quod iste esse eaque velit incidunt laudantium modi magnam perspiciatis dicta, nihil sunt autem quam iure ratione quas deserunt quasi totam ducimus. Itaque molestiae architecto recusandae necessitatibus eligendi alias tenetur sed ea quidem reprehenderit amet, laudantium sunt. Omnis ipsum similique necessitatibus eligendi libero! Illum illo deserunt dolorem quidem porro facere repellat sunt, eligendi eaque iusto, quam suscipit quaerat voluptas expedita fugit rerum tenetur. Ut possimus sed quam ex esse temporibus!
                    </Box>
                </Paper>
            </Grid>
            <Grid item md={5} sm={6}>
                <Paper elevation={10}>
                    <Box p={5} textAlign="justify">
                        <Typography variant="h5" align="center">Looks like you're new here!</Typography>
                        <Typography variant="subtitle1" align="center">Sign up with your email to get started</Typography>
                        <FormGroup>
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
                    </Box>
                </Paper>
            </Grid>
        </Grid>

        // <FormGroup style={{ width: '50%' }}>
        //     <Typography> REGISTRATION FORM </Typography>
        //     <Typography>&nbsp;</Typography>
        // </FormGroup>
    )
}

export default AddUser;