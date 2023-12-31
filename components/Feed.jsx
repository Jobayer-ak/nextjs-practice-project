'use client';

import React, { useEffect, useState } from 'react';
import PromptCard from './PromptCard';


export const PromptCardList = ({ data, handleTagClick }) => {
  console.log("dd: ", data);
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    // e.preventDefault();
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      console.log('data: ', data);
      setPosts(data);
    };
    fetchPosts();
  }, []);

  // console.log('posts: ', posts);
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={posts} handleTagClick={()=>{}} />
    </section>
  );
};

export default Feed;
