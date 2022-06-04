import React from 'react';
import userImage from '../assets/images/user-mui.png';
import { Box, Typography, Grid, TextField } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Home = () => {

    return (
        <>
            <Grid container sx={{ marginTop: 1 }} gap={1} justify="center">
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 500, margin: 10 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={userImage}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                CRUDAPP SYSTEM LOGIN
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Please, Login Or Register Here <br />
                                for Dashboard view <br />
                            </Typography>
                        </CardContent>
                        {/* <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions> */}
                    </Card>
                </Grid>
                <Grid item xs={6}>

                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off">
                        <div>
                            <Box 
                            sx={{ margin:20 }}
                            >
                            <Typography variant="h4">Login Form</Typography>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    defaultValue="Email"
                                />
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                />
                            </Box>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};
export default Home;
