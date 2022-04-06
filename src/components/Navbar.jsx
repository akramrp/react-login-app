import React from 'react';
import { Button  } from "@mui/material";
import {useNavigate, NavLink} from 'react-router-dom';

const Navbar = () => {
    const auth = localStorage.getItem("loginData");
    const navigate = useNavigate()
    const logout = () => {
        // if(window.alert('Are you sure to logout🤨')){
            localStorage.clear();
            navigate('/login');
        // }
        
    }
    return (
        <React.Fragment>
            <Button><NavLink to='/' exact="true">[LOGO]  Home </NavLink></Button>
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
            <Button><NavLink to='reduxCounter' exact="true"> ReduxCounter </NavLink></Button>
        </React.Fragment>
    )
}

export default Navbar;

// {
//     (() => {
//         if (auth) {
//             return (
//                 <>
//                     <Button><NavLink to='/' exact="true">Home </NavLink></Button>
//                     <Button><NavLink to='add' exact="true">Add User </NavLink></Button>
//                     <Button><NavLink to='all' exact="true">All User </NavLink></Button>
//                     <Button><NavLink to='profile' exact="true">Profile </NavLink></Button>
//                     <Button><NavLink onClick={logout} to='login' exact="true">Logout </NavLink></Button>   
//                 </>
//             )
//         } else {
//             return (
//                 <>
//                     <Button><NavLink to='/' exact="true">Home </NavLink></Button>
//                     <Button><NavLink to='login' exact="true">Login </NavLink></Button>
//                 </>
//             )
//         }
//     })()
// }