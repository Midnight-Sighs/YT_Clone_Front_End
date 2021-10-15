import React from 'react';
import Submission from '../Submission/Submission'
import './Header.css'

const SearchBar = () => {

        const{data, handleChange, handleSubmit } = Submission(search)

        function search(){
            alert(`This is your search Term ${data.searchTerm}`)
        }

        return(
            <div>
                <form className="search-bar" onSubmit={handleSubmit}>
                    <input className="search-field" type="text" placeholder="Find Your Rabbit Hole" name="searchTerm" value={data.searchTerm} onChange={handleChange}></input>
                    <button className="btns search" type="submit">Search</button>
                </form>
            </div>
        )
}

export default SearchBar