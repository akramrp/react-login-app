import React, { useState } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'
import { Add } from "@mui/icons-material"

// import from redux
import { useSelector, useDispatch } from 'react-redux'
import { changeThemeColor } from './themeSlice'

function Theme() {
    const [color, setColor] = useState('White')
    const themetextColor = useSelector((state) => state.theme.color)
    const dispatch = useDispatch();
    return (
        <>
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
                        label="Color Name"
                        // defaultValue="Hello World"
                        onChange={(e) => setColor(e.target.value)}
                    />
                </div>
            </Box>
            <Typography varient="h3" style={{color: themetextColor}}>{color}</Typography>
            <Button variant="contained" color='primary' size="small" onClick={() => { dispatch(changeThemeColor(color)) }} startIcon={<Add />}>set global color by redux</Button>
        </>
    )
}

export default Theme