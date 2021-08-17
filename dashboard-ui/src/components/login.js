import React, {useState} from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom';
import WelcomPage from './welcomepage'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Login() {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [allInfoList, setAllInfoList] = useState([]);


    const submitInfo = () => {
        Axios.post('http://localhost:4000/user/signin',{
          email: email,
          password: password,
        }).then((res) => {
        //   alert('Success');
        console.log(res.data.data);
        // return false;
          localStorage.setItem('user',res.data.data.firstName);
        //   window.location='/WelcomPage';
        <React to='/WelcomPage'></React>
        })
      }
        return (
            
            <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => {setEmail(e.target.value)}}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => {setPassword(e.target.value)}}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="button" className="btn btn-dark btn-lg btn-block" onClick = {submitInfo}>Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password</a>
                </p>
            </form>
            
        );
    }

export default Login;