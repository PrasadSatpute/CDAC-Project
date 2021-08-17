import React, {useState} from 'react'
import Axios from 'axios'


function SignUp() {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [allInfoList, setAllInfoList] = useState([]);

    const submitInfo = () => {
        Axios.post('http://localhost:4000/user/signup',{
          firstName: firstName,
          email: email,
          password: password,
        }).then(() => {
          alert('Success')
        })
      }


    
        return (
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" onChange={(e) => {setFirstName(e.target.value)}} />
                </div>

                {/* <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div> */}

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => {setEmail(e.target.value)}}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => {setPassword(e.target.value)}}/>
                </div>

                <button type="button" onClick = {submitInfo} className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p>
            </form>
        );
    }


    export default SignUp;