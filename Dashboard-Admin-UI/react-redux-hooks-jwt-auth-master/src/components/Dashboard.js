import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { deleteUser } from "../actions/auth";

import SidenavBar from './Dashboard Components/Sidebar/Sidebar'
import Members from './Dashboard Components/All Components/Members'
import ProfileUser from './Dashboard Components/All Components/UserProfile'

const Dashboard = (props) => {
  const { user: currentUser } = useSelector((state) => state.auth);

  const { isDeleteUser } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  if (!currentUser) {
    return <Redirect to="/login" />;
  }


  const deleteProfile = () => {
      alert(currentUser.id)
      console.log(props)
      
  }

  function callConatiner(){
      alert('Member Conatiner Call')
  }
  
    


  return (
      <Router>
    <div className="container">
      {/* <header className="jumbotron">
        <h3>
          <strong>{currentUser.firstName}</strong> Profile
        </h3>
      </header>
      <p>

         <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)} 
    
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
       <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> 
*/}
      {/* <button className='btb btn-sm' onClick={deleteProfile}>Delete</button>  */}

        <div className="sidenavbar">
                <div className="sidenavbarItem">
                    <div className='NavBarContaineritem'>
                        <h5>
                            <Link to='/memberContainer'>memberContainer</Link>
                        </h5>
                    </div>
                    <div className='NavBarContaineritem'>
                        <h5>
                            <Link to='/userProfileContainer'>alluserConatiner</Link>
                        </h5>
                    </div>
                    
                    
                </div>
                <div>
                <div className='sidebarcontainer'>
                    {/* <div className='memberContainer'><Members></Members></div>
                    <div className='alluserConatiner'><AllUsers></AllUsers></div> */}
                    <Switch>
                        <Route path='/memberContainer' component={Members}></Route>
                        <Route path='/userProfileContainer' component={ProfileUser}></Route>
                    </Switch>
                </div>
            </div>
        </div>


    </div>
    </Router>
  );
};

export default Dashboard;
