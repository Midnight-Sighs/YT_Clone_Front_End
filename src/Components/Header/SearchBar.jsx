import React from 'react';
import Submission from '../Submission/Submission'
import './Header.css'

const SearchBar = (props) => {

        const { values, handleChange, handleSubmit } = Submission(search)

        function search(){
            let searchTerm = values.searchTerm
            props.setSearch({searchTerm})
            values.searchTerm = '';
        }

        return(
            <div>
                <form className="search-bar" onSubmit={handleSubmit}>
                    <input className="search-field" type="text" name="searchTerm" value={values.searchTerm} placeholder="Find Your Rabbit Hole" onChange={handleChange}></input>
                    <button className="btns search" type="submit">Search</button>
                </form>
            </div>
        )
        
}

export default SearchBar