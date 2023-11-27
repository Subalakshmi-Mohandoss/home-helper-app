import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
const SearchableList = ({ items }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <TextField
            id="outlined-search"
            label="Search"
            type="search"
            variant="outlined"
            value={searchQuery}
            style={{ marginTop: 10, width: 500, borderRadius: 20 }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
      {searchQuery && (
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default SearchableList;
