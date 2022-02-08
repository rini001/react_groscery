import React from "react";
import { v4 as uuidv4 } from "uuid";
export const GroceryInput = ({ add, setAdd }) => {
	const [value, setValue] = React.useState("");

	return (
		<div>
			<input
				placeholder="enter something"
				onChange={(e) => setValue(e.currentTarget.value)}
                value={value}
            />

			<button
				onClick={() => {
					if (value !== "") {
						setAdd([...add, { value, id: uuidv4() }]);
                        setValue("");
                        
					} else {
						alert("enter value");
					}
				}}
			>
				ADD
			</button>
		</div>
	);
};