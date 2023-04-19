import React from 'react'
import  './index.css'

const TodoItems = (props) => {
    const { deleteFunc } = props
    const onDelete = () => {
        deleteFunc(props.id)
    }
    return (
        <li className='todo-container'>
            <h1 className='heading'>{props.item}</h1>
            <button className='delete-bt ' onClick={onDelete}>Delete</button>
        </li>
    )
}
export default TodoItems













