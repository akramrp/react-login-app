import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import userImage from '../assets/images/user-mui.png';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, Chip, Divider } from '@mui/material';
import OtherPages from './otherCode/OtherPages'

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    navItemStyle: {
        textDecoration: 'none',
        color: '#fff',
    },
    avtarStyle: {
        textDecoration: 'none',
    }
});

const PAGES_BEFORE_AUTH = [
    { 'title': 'Home', 'url': '/' },
    { 'title': 'Login', 'url': '/login' },
    { 'title': 'Register', 'url': '/add' },
]
const PAGES_AFTER_AUTH = [
    { 'title': 'Home', 'url': '/' },
    { 'title': 'Add User', 'url': '/add' },
    { 'title': 'All User', 'url': '/all' },
    { 'title': 'Profile', 'url': '/profile' },
    { 'title': 'Logout', 'url': 'login', 'anyFunction': 'logout' },
]
const POPUP_BEFORE_AUTH = [
    { 'title': 'Login', 'url': '/login' },
    { 'title': 'Register', 'url': '/add' },
];
const POPUP_AFTER_AUTH = [
    { 'title': 'Profile', 'url': '/profile' },
    { 'title': 'Logout', 'url': 'login', 'anyFunction': 'logout' },
];

const Navbar = () => {
    const classes = useStyles();
    const auth = localStorage.getItem("loginData");
    const authJson = auth ? JSON.parse(auth) : null;
    const navigate = useNavigate()
    const callToLogout = () => {
        // if(window.alert('Are you sure to logout🤨')){
        localStorage.clear();
        navigate('/login');
        // }

    }

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <React.Fragment>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography variant="h6" noWrap component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            APP-LOGO
                        </Typography>
                        {/* ============== for xs(small screen) code ============== */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {auth
                                    ?
                                    PAGES_AFTER_AUTH.map((item) => (
                                        item.anyFunction
                                            ?
                                            <MenuItem key={item.title} >
                                                <Typography textAlign="center">
                                                    <NavLink to={item.url} className={classes.avtarStyle} exact="true" onClick={callToLogout}>{item.title}</NavLink>
                                                </Typography>
                                            </MenuItem>
                                            :
                                            <MenuItem key={item.title}>
                                                <Typography textAlign="center">
                                                    <NavLink to={item.url} className={classes.avtarStyle} exact="true">{item.title}</NavLink>
                                                </Typography>
                                            </MenuItem>
                                    ))
                                    :
                                    PAGES_BEFORE_AUTH.map((item) => (
                                        <MenuItem key={item.title}>
                                            <Typography textAlign="center">
                                                <NavLink to={item.url} className={classes.avtarStyle} exact="true">{item.title}</NavLink>
                                            </Typography>
                                        </MenuItem>
                                    ))
                                }
                            </Menu>
                        </Box>
                        <Typography variant="h6" noWrap component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            LOGIN-SYSTEM
                        </Typography>
                        {/* ============== for mid(mid screen) code ============== */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {auth
                                ?
                                PAGES_AFTER_AUTH.map((item) => (
                                    item.anyFunction
                                        ?
                                        <Button
                                            key={item.title}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            <NavLink to={item.url} className={classes.navItemStyle} exact="true" onClick={callToLogout}>{item.title}</NavLink>
                                        </Button>
                                        :
                                        <Button
                                            key={item.title}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            <NavLink to={item.url} className={classes.navItemStyle} exact="true">{item.title}</NavLink>
                                        </Button>
                                ))
                                :
                                PAGES_BEFORE_AUTH.map((item) => (
                                    <Button
                                        key={item.title}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        <NavLink to={item.url} className={classes.navItemStyle} exact="true">{item.title}</NavLink>
                                    </Button>
                                ))
                            }
                            <OtherPages />
                        </Box>
                        {/* ============== user popup code ============== */}
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Click to open">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'white' }}>
                                    {
                                        auth
                                            ?
                                            <Typography> {authJson.name.toUpperCase()} </Typography>
                                            :
                                            <Typography> Welcome </Typography>
                                    }
                                    &nbsp; <Avatar alt={userImage} src={userImage} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {auth
                                    ?
                                    POPUP_AFTER_AUTH.map((item) => (
                                        item.anyFunction
                                            ?
                                            <MenuItem key={item.title}>
                                                <Typography textAlign="center">
                                                    <NavLink to={item.url} className={classes.avtarStyle} exact="true" onClick={callToLogout} >{item.title}</NavLink>
                                                </Typography>
                                            </MenuItem>
                                            :
                                            <MenuItem key={item.title}>
                                                <Typography textAlign="center">
                                                    <NavLink to={item.url} className={classes.avtarStyle} exact="true">{item.title}</NavLink>
                                                </Typography>
                                            </MenuItem>
                                    ))
                                    :
                                    POPUP_BEFORE_AUTH.map((item, itemIndex) => (
                                        <>
                                            <MenuItem key={item.title} sx={{ color: 'black' }}>
                                                <Typography textAlign="center">
                                                    <NavLink to={item.url} className={classes.avtarStyle} exact="true">{item.title}</NavLink>
                                                </Typography>
                                            </MenuItem>
                                            {itemIndex === 0 ? <Divider> <Chip size="small" label="OR" /> </Divider> : null}

                                        </>

                                    ))
                                }
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>
    )
}
export default Navbar;

{/* <Button><NavLink to='/' exact="true">[LOGO]  Home </NavLink></Button>
{ auth ?   <>
        <Button><NavLink to='all' exact="true">All User </NavLink></Button>
        <Button><NavLink to='profile' exact="true">Profile </NavLink></Button>
        <Button><NavLink onClick={logout} to='login' exact="true">Logout </NavLink></Button>   
    </>

:   <>
        <Button><NavLink to='add' exact="true">Signup </NavLink></Button>
        <Button><NavLink to='login' exact="true">Login </NavLink></Button>
    </> 
}
<Button><NavLink to='testPage' exact="true"> TestPage </NavLink></Button>
<Button><NavLink to='testPage2' exact="true"> TestPage2 </NavLink></Button>
<Button><NavLink to='testHooks' exact="true"> testHooks </NavLink></Button>
<Button><NavLink to='newForm' exact="true"> newForm </NavLink></Button>
<Button><NavLink to='newHome' exact="true"> newHome </NavLink></Button>
<Button><NavLink to='reduxCounter' exact="true"> ReduxCounter </NavLink></Button> */}