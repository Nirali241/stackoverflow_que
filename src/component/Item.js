import React from "react";
import './Item.css'

const Item = ({ item, setModalOpen, setCurr }) => {
  return (
    
    <tr 
      onClick={() => {
        setModalOpen(true);
        setCurr(item);
      }}
    >
    <td>{item.owner.display_name}</td>
    <td>{item.title}</td>
    <td>{item.creation_date}</td>
    </tr>
    
  );
};

export default Item;