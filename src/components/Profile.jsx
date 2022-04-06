import React from 'react';

const Profile = () => {
    let auth = localStorage.getItem("loginData");
    auth = JSON.parse(auth);
    // console.log(auth);
    return (
        <React.Fragment>
            <h2>My Profile</h2>
            <h3>
                Hello, {auth.name} <br />
                Username: {auth.username} <br />
                E-mail: {auth.email} <br />
                Phone: {auth.phone} <br />
            </h3>
        </React.Fragment>
    )
}

export default Profile;