import {React, useState } from 'react';
import EmptyList from '../components/EmptyList';
import BlogList from '../components/BlogList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import {bloglist } from '../config/Api';

const HomePage = ({data}) => {
    // blog state variable is initialized as any empty array
    // this array will be used to store a list of blog data that will be fetched and loaded into the component
    const [blogs, setBlogs]=useState([]);
    //searchkey is initialized as an empty string
    const [searchKey, setSearchKey] =useState('');
    //search submit
    const handleSearchBar = (e) =>{
        e.preventDefault();
        handleSearchResult();
    };
    //search for blog by cattegory
    const handleSearchResult =() =>{
        //handle search input
        const filteredBlogs=bloglist().filter(blog =>blog.name.toLowerCase().includes(searchKey.toLowerCase()));
        setBlogs(filteredBlogs);
    };
    //clear search and show all blogs
    const handleClearSearch =() =>{
        //the blog list retrieved and through a promise are set to the setBlogs()
        //and the search key set to empty.
        bloglist().then((res) =>{
            setBlogs(res);
        } )
        setSearchKey("");
    };
    //functions to get selected blog content
    const BlogContent =(id) =>{
        data(id);
    }
    return(
        <div>
            {/* the header*/}{/*use curly braces for comments in Jsx*/}
            <Header />
            <SearchBar 
                value ={searchKey}//
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                //updates the searchkey state variable with the new value entered by user
                handleSearchKey={(e) =>setSearchKey(e.target.value)}
            />
            {/*Blog list & Empty View */}
            {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} content={BlogContent}/>}
        </div>
    );
};
export default HomePage;