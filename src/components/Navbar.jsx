import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import userImage from '../assets/images/user-mui.png';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, Chip, Divider } from '@mui/material';

// import { makeStyles } from '@mui/styles';
// const useStyles = makeStyles({
//     navItemStyle: {
//         textDecoration:'none',
//         color: '#fff',
//     },
//   });

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
    { 'title': 'Logout', 'url': '', 'anyFunction': 'logout' },
]
const POPUP_BEFORE_AUTH = [
    { 'title': 'Login', 'url': '/login' },
    { 'title': 'Register', 'url': '/add' },
];
const POPUP_AFTER_AUTH = [
    { 'title': 'Profile', 'url': '/profile' },
    { 'title': 'Logout', 'url': '', 'anyFunction': 'logout' },
];

const Navbar = () => {
    // const classes = useStyles();
    const auth = localStorage.getItem("loginData");
    const navigate = useNavigate()
    const logout = () => {
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
                                            <MenuItem key={item.title} onClick={item.anyFunction}>
                                                <Typography textAlign="center">
                                                {/* <NavLink className={classes.navItemStyle} to={item.url} exact="true">{item.title}</NavLink> */}
                                                    <NavLink  to={item.url} exact="true">{item.title}</NavLink>
                                                </Typography>
                                            </MenuItem>
                                            :
                                            <MenuItem key={item.title}>
                                                <Typography textAlign="center">
                                                    <NavLink  to={item.url} exact="true">{item.title}</NavLink>
                                                </Typography>
                                            </MenuItem>
                                    ))
                                    :
                                    PAGES_BEFORE_AUTH.map((item) => (
                                        <MenuItem key={item.title}>
                                            <Typography textAlign="center">
                                                <NavLink  to={item.url} exact="true">{item.title}</NavLink>
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
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {auth
                                ?
                                PAGES_AFTER_AUTH.map((item) => (
                                    item.anyFunction
                                        ?
                                        <Button
                                            key={item.title}
                                            onClick={item.anyFunction}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            <NavLink  to={item.url} exact="true">{item.title}</NavLink>
                                        </Button>
                                        :
                                        <Button
                                            key={item.title}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            <NavLink  to={item.url} exact="true">{item.title}</NavLink>
                                        </Button>
                                ))
                                :
                                PAGES_BEFORE_AUTH.map((item) => (
                                    <Button
                                        key={item.title}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        <NavLink  to={item.url} exact="true">{item.title}</NavLink>
                                    </Button>
                                ))
                            }
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'white' }}>
                                    user-name &nbsp; <Avatar alt={userImage} src={userImage} />
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
                                            <MenuItem key={item.title} onClick={handleCloseUserMenu}>
                                                <Typography textAlign="center">
                                                    <NavLink  to={item.url} exact="true">{item.title}</NavLink>
                                                </Typography>
                                            </MenuItem>
                                            :
                                            <MenuItem key={item.title}>
                                                <Typography textAlign="center">
                                                    <NavLink  to={item.url} exact="true">{item.title}</NavLink>
                                                </Typography>
                                            </MenuItem>
                                    ))
                                    :
                                    POPUP_BEFORE_AUTH.map((item, itemIndex) => (
                                        <>
                                            <MenuItem key={item.title}>
                                                <Typography textAlign="center">
                                                    <NavLink  to={item.url} exact="true">{item.title}</NavLink>
                                                </Typography>
                                            </MenuItem>
                                            {
                                                itemIndex===0 ? <Divider> <Chip size="small" label="OR" /> </Divider> : null
                                            }
                                            
                                        </>
 
                                    ))
                                }
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
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
        </React.Fragment>
    )
}

export default Navbar;