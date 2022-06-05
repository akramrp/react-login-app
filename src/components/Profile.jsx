import React from "react";
import { Typography, Grid, Paper, Box } from "@mui/material";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const Profile = () => {
    let auth = localStorage.getItem("loginData");
    auth = JSON.parse(auth);
    // console.log(typeof(auth));
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
                        <Typography variant="h5" align="center">Lorem-Text-50</Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum pariatur aliquam quibusdam neque et ea ducimus harum unde at, officia beatae cum perspiciatis veniam tenetur quidem consequuntur nesciunt impedit saepe maxime officiis explicabo. Quae sint, optio dolore repudiandae dolor velit nobis illum odit eos. Voluptate possimus facere laudantium repellat atque?
                    </Box>
                </Paper>
            </Grid>
            <Grid item md={5} sm={6}>
                <Paper elevation={10}>
                    <Box p={5}>
                        <Typography variant="h5" align="center">MY PROFILE</Typography>
                        <Box>
                            <Typography variant="subtitle1" align="center"><AccountCircleIcon /> Name-----------------: {auth.name}</Typography>
                            <Typography variant="subtitle1" align="center"><ManageAccountsIcon /> Username-----------: {auth.username}</Typography>
                            <Typography variant="subtitle1" align="center"><EmailIcon /> E-mail-: {auth.email}</Typography>
                            <Typography variant="subtitle1" align="center"><ContactPhoneIcon /> Phone------------: {auth.phone}</Typography>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
        // <React.Fragment>
        //     <h2>My Profile</h2>
        //     <h3>
        //         Hello, {auth.name} <br />
        //         Username: {auth.username} <br />
        //         {auth.email} <br />
        //         {auth.phone} <br />
        //     </h3>
        // </React.Fragment>
    )
}

export default Profile;