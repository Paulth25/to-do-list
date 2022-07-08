import React, { useState } from "react";
import "./App.css";

function App() {
  let [newList, setnewList] = useState("");
  let [items, setItems] = useState([]);
  let [showEdit, setShowEdit] = useState(-1);
  let [updatedText, setNewText] = useState("");

  // Adding a new item into the array 
  function addToList() {
    // Checking for an empty item
    if (!newList)
    {
      alert("You need to type something in the box before you can add it to the list sausage !");
      return;
    }

    let item = {
      id: Math.floor(Math.random() * 1000),
      value: newList,
    };
      // sorts the item ID with a new id generated.

    // Adding new item to items list.
    setItems((oldList) => [...oldList, item]);

    // Reset newList back to original state
    setnewList("");
  }

  // deletes an item
  function deleteFromList(id) {
    let newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  /* Edit an item text after creating it. */
  function editItem(id, newText) {
    // Get the current item
    let currentItem = items.filter((item) => item.id === id);

    // Create a new item with same id
    let newList = {
      id: currentItem.id,
      value: newText,
    };

    deleteFromList(id);

    // Replace item in the item list
    setItems((oldList) => [...oldList, newList]);
    setNewText("");
    setShowEdit(-1);
  }

  // Main part of app
  return (
    <div className="app">
    <h1>Welcome to your</h1>
    <h1>To-Do List</h1>
    {/* 2. Add new item */}
    <input
        type="text"
        placeholder="Add something to your list..."
        value={newList}
        onChange={(e) => setnewList(e.target.value)}
    />
  {/* button to add an item to the list */}
    <button onClick={() => addToList()}>Add</button>
  {/* 3. List of todos (unordered list) */}
    <ul>
        {items.map((item) => {
        return (
    <div>
    <li key={item.id} onClick={() => setShowEdit(item.id)}>
    {item.value}
    <button
        className="delete-button"
        onClick={() => deleteFromList(item.id)}
        >
        ❌ 
    </button>
    </li>
    
    {showEdit == item.id ? (
    <div>
    <input
        type="text"
        value={updatedText}
        onChange={(e) => setNewText(e.target.value)}
    />
    <button onClick={() => editItem(item.id, updatedText)}> Update
    </button>
    </div>
    ) : null}
    </div>
    );})}
    </ul></div>
    );}

export default App;

// added some notes for personal reference