import '../App.css';
import React, {useState} from 'react'


function WelcomPage() {

    const [firstName, setFirstName] = useState('');
    console.log(firstName );
    if(localStorage.getItem('user')!=null && firstName===''){
       
        setFirstName(localStorage.getItem('user') );
    }    
    return (
        <div className='dashboard'>
            <h1>{[firstName]}</h1>
        </div>
        );
    }


    export default WelcomPage;