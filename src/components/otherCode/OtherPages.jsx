import React from 'react'
import { Box, IconButton, Typography, Menu, Tooltip, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    avtarStyle: {
        textDecoration: 'none',
    }
});

const OTHER_PAGES = [
    { 'title': 'TempTestPage', 'url': '/tempTestPage' },
    { 'title': 'New Home', 'url': '/newHome' },
    { 'title': 'New Form', 'url': '/newForm' },
    { 'title': 'Redux Counter', 'url': '/reduxCounter' },
    { 'title': 'Test Hooks', 'url': '/testHooks' },
    { 'title': 'Test Page', 'url': '/TestPage' },
    { 'title': 'Test Page2', 'url': '/TestPage2' },
]

function OtherPages() {
    const classes = useStyles();
    const [anchorOtherPages, setAnchorOtherPages] = React.useState(null);

    const handleOpenOtherMenu = (event) => {
        setAnchorOtherPages(event.currentTarget);
    };

    const handleCloseOther = () => {
        setAnchorOtherPages(null);
    };
    return (
        <>
            <Tooltip title="">
                <IconButton onClick={handleOpenOtherMenu} sx={{ p: 0, color: 'white' }}>
                    <Typography sx={{marginLeft:7}}> | OTHER PAGES </Typography>
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorOtherPages}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorOtherPages)}
                onClick={handleCloseOther}
            >
                {
                    OTHER_PAGES.map((item) => (
                        <MenuItem key={item.title} sx={{ color: 'black' }}>
                            <Typography textAlign="center">
                                <NavLink to={item.url} className={classes.avtarStyle} exact="true">{item.title}</NavLink>
                            </Typography>
                        </MenuItem>
                    ))
                }
            </Menu>
        </>
    )
}

export default OtherPages