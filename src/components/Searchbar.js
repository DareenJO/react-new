import React from 'react'
import {useState} from 'react'
import { filter, Input } from '@chakra-ui/react';
import CardData from './CardData';
  const Searchbar = () => {
    
    const [searchInput, setSearchInput] = useState('');
    const changehandle=(e)=>{
      setSearchInput(e.target.value);
    }


    let dataSearch= CardData.card.filter(item=>{
      return Object.keys(item).some(key=>
        item[key].toString().toLowerCase().includes(searchInput.toString.toLowerCase));
    })

return(
 <>

<input w={400} type="text"placeholder='search' onChange={changehandle}></input>



{dataSearch.card.map((item, index)=>{
  return(
     <p>{item.name}</p>
  )
  }) }   
 </>


 
 )}


 export default Searchbar;










