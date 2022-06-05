import React from 'react';
import userImage from '../assets/images/user-mui.png';
import { Box, Typography, Grid, TextField, Button, Divider, Chip } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Home = () => {

    return (
        <>
            <Grid container gap={1} >
                <Grid item xs={5}>
                    <Card sx={{ margin: 5 }}>
                        <CardMedia
                            component="img"
                            image={userImage}
                            alt="green iguana"
                            sx={{ height: '10em', width: '10em', margin: '5px 75px' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                LOGIN SYSTEM
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Welcome, Login Or Register Here for Dashboard view <br />
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} >
                    <Card sx={{ margin: 5 }}>
                        <CardContent>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                                }}
                                noValidate
                                autoComplete="off">
                                <div>
                                    <Box>
                                        <Typography variant="h4"> Login Form</Typography>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Required"
                                        />
                                        <TextField
                                            required
                                            id="outlined-password-input"
                                            label="Password"
                                            type="password"
                                        />
                                        <br />
                                        <Button
                                            variant="contained"
                                            sx={{ margin: '10px 10px' }}
                                        >
                                            Login
                                        </Button>
                                    </Box>
                                </div>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Box sx={{ margin: '0 5px 5px' }}>
                    <Divider><Chip size="small" label="LOREM-TEXT" /></Divider><br />
                    <Typography>
                        LOREM77::::: &nbsp;&nbsp;
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, modi fuga minima soluta quam ducimus voluptatum possimus rem itaque maxime non maiores neque exercitationem, corporis, reiciendis quis culpa deserunt at qui repellat. Unde, perferendis repellat nisi provident optio ut doloremque voluptatum hic dolorem magni ullam, ratione dolorum cum, sunt numquam nostrum possimus pariatur accusamus? Nulla, inventore perspiciatis accusamus molestias nam provident eligendi beatae eveniet perferendis commodi sed saepe tempore eius voluptas modi assumenda dignissimos suscipit similique tempora!
                    </Typography>
                    <Typography>
                        LOREM88:::::: &nbsp;&nbsp;
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minima voluptas, velit beatae facilis incidunt accusantium voluptatum. Quo aut perferendis ratione enim impedit, quibusdam labore distinctio adipisci quaerat ipsam itaque aliquam ad deleniti voluptate explicabo dolor hic ipsum, neque facilis reprehenderit! Ullam, laborum ab velit similique quisquam unde, fuga placeat, pariatur natus nobis labore architecto at aspernatur nam iste mollitia quas? Odio excepturi ad vitae quisquam fugit non minus assumenda sint aliquam iusto rem, iure praesentium qui placeat tenetur ea hic quo quasi laborum sed, repellendus, inventore harum.
                    </Typography>
                </Box>
            </Grid>
        </>
    );
};
export default Home;