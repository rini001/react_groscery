import React from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList"


// import { v4 as uuidv4 } from "uuid";
export const Grocery = () => {
	const [add, setAdd] = React.useState([]);
	return (
		<>
			<GroceryInput  add={add} setAdd={setAdd} />
            <ul>
				{add.map((items) => {
					return <GroceryList key={items.id} items={items.value} />;
				})}
			</ul>
		</>
	);
};