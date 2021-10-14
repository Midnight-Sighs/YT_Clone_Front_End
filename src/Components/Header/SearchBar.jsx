import React from 'react';
import Submission from '../Submission/Submission'

const SearchBar = () => {

        const{data, handleChange, handleSubmit } = Submission(search)

        function search(){
            alert(`This is your search Term ${data.searchTerm}`)
        }

        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search Here" name="searchTerm" value={data.searchTerm} onChange={handleChange}></input>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
}

export default SearchBar