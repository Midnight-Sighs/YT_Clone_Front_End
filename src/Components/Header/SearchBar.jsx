import React from 'react';
import Submission from '../Submission/Submission'
import './Header.css'

const SearchBar = (props) => {

        const{ data, handleChange, handleSubmit } = Submission(search)

        function search(){
           props.setSearch(data.searchTerm)
        }

        return(
            <div>
                <form className="search-bar" onSubmit={handleSubmit}>
                    <input className="search-field" type="text" name="searchTerm" defaultValue={data} placeholder="Find Your Rabbit Hole" onChange={handleChange}></input>
                    <button className="btns search" type="submit">Search</button>
                </form>
            </div>
        )
        
}

export default SearchBar