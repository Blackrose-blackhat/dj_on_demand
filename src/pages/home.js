import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import Search from './search'
const Home = () => {
    return (
        <div className='home'>
            <div className='navbar'>
                <Link to='/'>Home</Link>
                <Link to='/playlist'>Playlist</Link>
                <Link to='/about-us'> About Us</Link>
            </div>
            
            <div className='searchBar'>
                <Search />
            </div>
        </div>
        
    );
}

export default Home;

