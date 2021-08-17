import React, { Component } from "react";





export default class Login extends Component {
    render() {
        return (
            <form>

                <h3>Forget Password</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>OTP<button className='btn btn-success btn-sm'>Get OTP</button></label>
                    <input type="text" className="form-control" placeholder="Enter OTP" />
                </div>

                <div className="form-group">
                    <div>
                        
                    </div>
                </div>


                <button type="submit" className="btn btn-dark btn-lg btn-block">Reset Password</button>
            </form>
        );
    }
}