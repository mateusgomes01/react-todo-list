import './App.css';

function ItemRow({ description }) {
  return (
    <div>
      <input type="checkbox"/>
      <span>{ description }</span>
    </div>
  )
}

function ItemList({ items }) {
  const rows = []

  items.forEach((item) => {
    rows.push(
      <ItemRow
        description={item.description}
      />
    )
  })

  return (
    <div>
      { rows }
    </div>
  )
}

function AddItem() {
  return (
    <form>
      <input type="text" placeholder="Ad"></input>
      <button>Add</button>
    </form>
  )
}

function TodoList({ items }) {
  return (
    <div>
      <h1>Mateus' ToDo List</h1>
      <AddItem/>
      <ItemList items={ items } />
    </div>
  )
}

function App() {
  return <TodoList items={TODO_LIST}/>;
}

const TODO_LIST = [
  {description: "Memorize Psalms 147"},
  {description: "Do laundry"},
  {description: "Study HTML CORS"},
  {description: "Study JS"},
  {description: "Study React"},
];

export default App;
