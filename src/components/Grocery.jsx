import React from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";

// import { v4 as uuidv4 } from "uuid";
export const Grocery = () => {
  const [add, setAdd] = React.useState([]);
  const handleDelete = (e) => {
    // console.log(e.target.parentNode.remove());
    const del = add.filter((el) => {
      return el.id !== e;
    });
    setAdd(del);
  };
  return (
    <>
      <GroceryInput add={add} setAdd={setAdd} />
      <ul>
        {add.map((items) => {
          return (
            <GroceryList
              key={items.id}
              items={items.value}
              setAdd={setAdd}
              handleDelete={handleDelete}
              id={items.id}
            />
          );
        })}
      </ul>
    </>
  );
};
