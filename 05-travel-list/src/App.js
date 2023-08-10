import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([])
  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }
  function handleDeleteItems(id) {
    // console.log(id);
    setItems((items) => items.filter(item => item.id !== id))
  }
  function handleToggleItems(id) {
    setItems((items) => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }
  function handleClearList() {
    const confirmed = window.confirm('Are you sure you want to clear all the items')
    if (confirmed) setItems([]);
  }
  return <div className="app">
    <Logo />
    <Form onAddItems={handleAddItems} />
    <PackingList items={items} onDeleteItems={handleDeleteItems} onToggleItems={handleToggleItems}
      onClearList={handleClearList} />
    <Stats items={items} />
  </div >
}
function Logo() {
  return <h1>🌴 Far Away 👜</h1>;
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newitems = { description, quantity, packed: false, id: Date.now() }
    // console.log(newitems);
    onAddItems(newitems)
    setDescription("")
    setQuantity(1)
  }
  return <form className="add-form" onClick={handleSubmit}>
    <h3>What do you need for your 🤩 trip?</h3>
    <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
      {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
        <option value={num} key={num}>{num}</option>
      ))}
    </select>
    <input type="text" placeholder="Item..." value={description} onChange={e =>
      setDescription(e.target.value)
    } />
    <button>Add</button>
  </form>
}
function PackingList({ items, onDeleteItems, onToggleItems, onClearList }) {
  const [sortBy, setSortBy] = useState("input")
  let sortedItems
  if (sortBy === "input") sortedItems = items
  if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
  if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))

  return <div className="list" >
    <ul >
      {sortedItems.map((item) => <Item item={item} key={item.id} onDeleteItems={onDeleteItems} onToggleItems={onToggleItems} />)}
    </ul>
    <div>
      <select className="actions" value={sortBy} onChange={e => setSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description order</option>
        <option value="packed">Sort by packed order</option>
      </select>
      <button onClick={onClearList}>Clear list</button>
    </div>
  </div >
}
function Item({ item, onDeleteItems, onToggleItems }) {
  return <li>
    <input type="checkbox" value={item.packed} onClick={() => onToggleItems(item.id)} />
    <span style={item.packed ? { textDecoration: "line-through" } : {}}>
      {item.quantity}
      {" "}
      {item.description}
    </span>
    <button onClick={() => onDeleteItems(item.id)}>❌</button>
  </li>
}
function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">"Start adding items to your packings list..."</p>
    )
  const numItems = items.length
  const numPacked = items.filter(item => item.packed).length
  const percentage = Math.round((numPacked / numItems) * 100)
  return <footer className="stats">
    <em>
      {percentage === 100 ? "You are ready to go" :
        `💼 You have ${numItems} items in your list, and you have already packed ${numPacked} (${percentage}%) items.`
      }
    </em>
  </footer>
}