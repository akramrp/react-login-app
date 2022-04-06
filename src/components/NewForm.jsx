import React from 'react'
import { Fab, Button, TextField, IconButton, Stack, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel, Box, Divider } from "@mui/material";
import { Home, Delete, ArrowForward, ArrowBack, Info, Add, Edit, Favorite } from '@mui/icons-material';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';


const NewForm = () => {
    const [value, setValue] = React.useState(new Date());
    return (
        <>
            <Divider>Button Section</Divider>
            <Button variant="contained" size="small" startIcon={<Home />}>default primary</Button> &nbsp;
            <Button variant="contained" color='primary' size="small" startIcon={<Delete />}>primary</Button>&nbsp;
            <Button variant="contained" color='secondary' size="small" endIcon={<ArrowForward />}>secondary</Button>&nbsp;
            <Button variant="contained" color='success' size="small" endIcon={<ArrowBack />}>success</Button>&nbsp;
            <Button variant="contained" color='error' size="small" endIcon={<Info />}>info</Button>&nbsp;
            <IconButton variant="contained" color="error"> <Delete /> </IconButton> &nbsp; {/* IconButton provide only icon */}

            <Divider orientation='vertical'>Fab Icon</Divider>

            {/* Floating action button */}
            <Fab color="primary" aria-label="add" size="small"> <Add /> </Fab> &nbsp;
            <Fab color="secondary" aria-label="edit" size="small"> <Edit /> </Fab> &nbsp;
            <Fab color="success" aria-label="favorite" size="small"> <Favorite /> </Fab> &nbsp;

            <Divider>Date And Time</Divider>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                    <MobileDatePicker
                        label="For mobile"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />

                    <DesktopDatePicker
                        label="For desktop"
                        value={value}
                        minDate={new Date('2017-01-01')}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />

                    <DatePicker
                        disableFuture
                        label="Responsive"
                        openTo="day"
                        views={['day', 'month', 'year']}
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
            </LocalizationProvider>

            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    <FormControlLabel
                        value="disabled"
                        disabled
                        control={<Radio />}
                        label="other"
                    />
                </RadioGroup>
            </FormControl>
            <FormControl>
                <TextField id="outlined-basic" label="Enter Name" variant="outlined" />
            </FormControl>

            <br /> <br />
            <Box textAlign="left" color="primary.main" sx={{ border: 1, borderColor: 'error.main' }}>textAlign="left"</Box>
            <Box textAlign="center" color="secondary.main" fontSize={19} fontStyle="italic">textAlign="center"</Box>
            <Box textAlign="right" fontWeight={600}>textAlign="right"</Box>

            <Divider>MUI-Form (DividerLine)</Divider>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off">
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                    />
                    <TextField
                        disabled
                        id="outlined-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField id="outlined-search" label="Search field" type="search" />
                    <TextField
                        error
                        id="outlined-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                    />
                </div>
            </Box>

        </>
    )
}

export default NewForm