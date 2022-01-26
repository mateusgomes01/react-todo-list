import { useState } from "react";

function ItemRow({ description }) {
  return (
    <div>
      <input type="checkbox" />
      <span>{` ${description}`}</span>
    </div>
  );
}

function ItemList({ itemList }) {
  const rows = [];

  itemList.forEach((item) => {
    rows.push(<ItemRow description={item.description} />);
  });

  return <div>{rows}</div>;
}

function AddItem({ currentItem, onNewItemChange, addNewItem }) {
  return (
    <form>
      <input
        type="text"
        value={currentItem}
        placeholder="Ad..."
        onChange={(e) => {
          onNewItemChange(e.target.value);
        }}
      />
      <button onClick={addNewItem}>Add</button>
    </form>
  );
}

function TodoList({ items }) {
  const [itemList, setItemList] = useState(items);
  const [newItem, setNewItem] = useState("");

  function addNewItem() {
    setItemList([...itemList, { description: newItem }]);
  }

  return (
    <div /*className="todo-list-box"*/>
      <h1>Mateus' ToDo List</h1>
      <AddItem
        currentItem={newItem}
        onNewItemChange={setNewItem}
        addNewItem={addNewItem}
      />
      <ItemList itemList={itemList} />
    </div>
  );
}

function App() {
  return <TodoList items={TODO_LIST} />;
}

const TODO_LIST = [
  { description: "Memorize Psalms 147" },
  { description: "Do laundry" },
  { description: "Study HTML CORS" },
  { description: "Study JS" },
  { description: "Study React" }
];

export default App;
