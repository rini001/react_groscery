import React from 'react';

export const GroceryList = ({ items }) => {
    const handleDelete = (e) =>{
        console.log(e.target.parentNode.remove());
    }
    return (
		<li>
			{items}
			<button onClick={handleDelete}>delete</button>
		</li>
	);
};