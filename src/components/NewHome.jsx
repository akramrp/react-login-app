import * as React from 'react';
import {Box, Divider, Grid, Hidden, Paper} from '@mui/material';


export default function NewHome() {
  return (
    <>
      <Divider>Grid System design</Divider><br />
      {/* 
        direction="row"
        direction="row-reverse"
        direction="column"
        direction="column-reverse"
        justify="center"
      */}

      <Grid container gap={1} direction="row" justify="center">
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="Center"> { /*1 Box */}
            <Grid container>
              <Grid item xs={12}>
                <Box bgcolor="green" p={2} textAlign="center">1-2 Box</Box>
              </Grid>
              <Grid item xs={6}>
                <Box bgcolor="blue" p={2} textAlign="center">1-2 Box</Box>
              </Grid>
              <Grid item xs={6}>
                <Box bgcolor="yellow" p={2} textAlign="center">1-3 Box</Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="yellow" p={5} textAlign="Center"> 2 Box </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="green" p={5} textAlign="Center"> 3 Box </Box>
        </Grid>
        {/* 
          <Hidden smUp">
          <Hidden smDown>
          <Hidden only="sm"> this hidden the 4th Grid(column) when sm screen in any case, we want hidden this column 
        */}
        <Hidden only="sm">
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box bgcolor="blue" p={5} textAlign="Center"> 4 Box </Box>
          </Grid>
        </Hidden>
      </Grid>


      <br />
      <Divider>Grid System with Paper component , varient property</Divider>
      <br />

      <Grid container gap={2} direction="row" justify="center">
        <Grid item md={4} sm={6} xs={12}>
         <Paper elevation={10}>
          <Box p={5} textAlign="Center"> 1. Paper elevation={10} </Box>
         </Paper>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Paper varient="outlined">
            <Box p={5} textAlign="Center"> 2. varient="outlined" </Box>
         </Paper>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Paper varient="outlined" square>
            <Box p={5} textAlign="Center"> 3. varient="outlined" square </Box>
          </Paper>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Paper elevation={24}>
            <Box p={5} textAlign="Center"> 4. Paper elevation={24} </Box>
         </Paper>
        </Grid>
      </Grid>

    </>
  );
}
