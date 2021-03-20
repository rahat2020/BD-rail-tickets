import React from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignedIn: false,
        // newUser: false,
        name: '',
        email: '',
        password: '',
        phone: '',
    })
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser)
                console.log(displayName, email, photoURL);
            })
            // console.log('sign in clicked');
            .catch(error => {
                console.log(error);
                console.log(error.message);

            })
    }
    const handleGoogleSignOut = () => {
        firebase.auth().signOut()
            .then(() => {
                const signOutUser = {
                    isSignedIn: false,
                    name: '',
                    photo: '',
                    email: '',
                    error: '',
                    success: false
                }
                setUser(signOutUser)
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }

    const handleBlur = (e) => {
        console.log(e.target.name, e.target.value);
        let isFormedValid = true;
        if (e.target.name === 'email') {
            isFormedValid = /\S+@\S+\S+/.test(e.target.value);
            // const isEmailValid = /\S+@\S+\S+/.test(e.target.value);
            // console.log(isEmailValid);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFormedValid = isPasswordValid && passwordHasNumber;
            // console.log(isPasswordValid && passwordHasNumber);
        }
        if (isFormedValid) {
            // debugger;
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    console.log(res)

                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    //   var errorCode = error.code;
                    //   var errorMessage = error.message;
                    //  console.log(errorCode, errorMessage);
                });

        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    console.log(res)
                    // console.log(res);

                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                });
        }
        e.preventDefault();
    }
    return (
        <div className="div-container wrapper">
            <h1> This is sign up page</h1>
            <input type="checkbox" onChange={()=>setNewUser (!newUser)} name="newUser" id="" />
            <label htmlFor="newUser">New User sign up</label>
            <form onSubmit={handleSubmit}>
                {
                    newUser && <input type="text" onBlur={handleBlur} onChange={() => setNewUser(!newUser)} placeholder="your name here" required />
                }
                <br />
                <input type="email" name="email" onBlur={handleBlur} placeholder="your email here" required />
                <br />
                <input type="password" name="password" onBlur={handleBlur} placeholder="your password here" required />
                <br />
                <input type="password" onBlur={handleBlur} placeholder="confirm password here" required />
                <br />
                <input className="submit" type="submit" />
                <br />
                <div className="login">
                    <a href="/SignIn"> Login here</a> <span>If you have an account</span>
                </div>
            </form>
            <div className="googleSign">

                {
                    user.isSignedIn ? <button onClick={handleGoogleSignOut}>sign out</button> : <button onClick={handleGoogleSignIn}>sign up with google</button>

                }
            </div>

        </div>
    );
};

export default Login;