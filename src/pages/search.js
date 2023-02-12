import { SearchRounded } from '@mui/icons-material';
import { Button } from '@mui/material';
import React ,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import './search.css';
import {useStateValue} from "../StateProvider";
import { actionTypes } from '../reducer';

const Search = () => {
    // eslint-disable-next-line
    const [{},dispatch] = useStateValue("");
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        console.log( input);

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        navigate('/search');
    };
    return (
        <form className='search'>
            <div className='searchInput'>
            <SearchRounded/>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder='Search for songs here' />
                    <Button type='submit' onClick={search} variant ="outlined">Search</Button>

                
            </div>
            
        </form>
    );
}

export default Search;
