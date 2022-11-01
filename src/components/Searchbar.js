import React from 'react'
import {useState} from 'react'
import { Input } from '@chakra-ui/react';
  const Searchbar = () => {

    const [searchInput, setSearchInput] = useState("");
   


  const card = [
 
   { name: "java", continent: "twaiq bootcamp" },
   { name: "android" },
   { name: "kotlen" },
   { name: "javascript" },
   { name: "flutter" },
   { name: "apple" },
   { name: "sql"},
 ];

 
 const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
    card.filter((country) => {
    return country.name.match(searchInput);
});
}

 
 return(
  <div>

<Input
w={400}
   type="search"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />

<table>
 
{card.map((country) => {

<div>
  <tr>
    <td>{country.name}</td>
  </tr>
</div>

})}
</table>

</div>

 )

};



 export default Searchbar;










