import {useEffect, useState} from 'react'
import Users from './users';
export function Home(props){
    const [userData,setUserData]= useState('')
    useEffect(()=>{
        fetch('https://panorbit.in/api/users.json')
        .then(response => response.json())
        .then(data => {
          // handle the data returned from the API
          setUserData(data);
        })
        .catch(error => {
          // handle any errors that occurred
          console.error(error);
        });
      
    },[])
    return(
        <div className='home-screen'>
            <img  src="../images/wave.svg"/>
            <Users 
            userData={userData}
            setUserDetails={props?.setUserDetails}
            />
        </div>
    )
}