import React from 'react';
import Submission from '../Submission/Submission'
import './Header.css'

const SearchBar = (props) => {

        const{ data:searchTerm, handleChange, handleSubmit } = Submission(search)

        function search(searchTerm){
           props.setSearch(searchTerm)
        }

        return(
            <div>
                <form className="search-bar" onSubmit={handleSubmit}>
                    <input className="search-field" type="text" name="searchTerm" defaultValue={searchTerm} placeholder="Find Your Rabbit Hole" onChange={handleChange}></input>
                    <button className="btns search" type="submit">Search</button>
                </form>
            </div>
        )
        
}

export default SearchBar