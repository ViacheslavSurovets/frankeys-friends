import React from 'react';

import './search-box.styles.css'

export const Search = ({ onChange, placeholder }) => {



   return (

        <input type = "search" className="search" placeholder = {placeholder}  name="search"  onChange={onChange} />

   )
};

