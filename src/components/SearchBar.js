import React from "react";
import '../index.css';
const SearchBar = ({formSubmit, value, handleSearchKey, clearSearch}) =>{
    return(
        <div classname='searchBar-wrap'>
            <form onSubmit={formSubmit}>
                <input
                type='text'
                placeholder="Search By category"
                value={value}
                onChange={handleSearchKey}
                />
                {value && <span onClick={clearSearch}>X</span>}
                <button>Go</button>
            </form>
        </div>
    );
};
export default SearchBar;
    