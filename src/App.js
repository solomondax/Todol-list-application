import { useState } from 'react'
import './App.css'
import TodoItems from './components/TodoItems';


const App = () => {

  const [data, setData] = useState(" ");
  const [items, setItems] = useState([]);

  const listOfItems = () => {
    setItems((some) => [...some, data])
    return setData("");
  }

  const handlerFunc = (e) => {
    setData(e.target.value)
  }

  const deleteFunc = (id) => {
    const data = items.filter((ar, index) =>
      index !== id)
    return setItems(data);
  }
  return (
    <div>
      <div className='sub-container'>
        <h1>TODO LIST</h1>
        <input type="text" onChange={handlerFunc} value={data} placeholder="ADD ITEMS" />
        <button className='add-button' onClick={listOfItems}>Add</button>
      </div>
      <ul className='li-one'>
        {items.map((each, index) =>
        (<TodoItems key={index} id={index} item={each} deleteFunc={deleteFunc} />
        ))}
      </ul>
    </div>
  )
}
export default App





















