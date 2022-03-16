import React from 'react';

export const GroceryList = ({ items,handleDelete,id }) => {
   
    return (
		<li>
			{items}
			<button onClick={()=>handleDelete(id)}>delete</button>
		</li>
	);
};