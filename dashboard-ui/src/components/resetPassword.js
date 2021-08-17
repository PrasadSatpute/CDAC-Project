import React, { Component } from "react";





export default class Login extends Component {
    render() {
        return (
            <form>

                <h3>Reset Password</h3>

                <div className="form-group">
                    <label>New Password</label>
                    <input type="password" className="form-control" placeholder="New Password" />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password" />
                </div>

                <div className="form-group">
                    <div>
                        
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign In</button>
            </form>
        );
    }
}