import React, {useEffect} from 'react';
import '../css/Home.css';
import { Navbar } from './Navbar';
import { Products } from './Products';
import { auth } from '../Config/Config';
import { useHistory } from 'react-router';

export const Home = ( {user} ) => {
    const history = useHistory();

    useEffect(()  =>{
        //forcing user to login
        auth.onAuthStateChanged(user =>{
            if(!user){
                history.push('/login');
            }
        })
    })

    return (
        <div className="wrapper">
            <Navbar  user={ user}/>
            <Products/>
        </div>
    )
}
