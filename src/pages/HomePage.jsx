import React, { useEffect, useState } from 'react'

export default function HomePage() {
    const [todoList, setTodoList] = useState(['love','easy','frontend']);
    const [cac, setCac] = useState({ name: 'cac', age: 10});
    useEffect(() => {
        setCac({...cac, age: 50});
    }, [])
   
    
    function removeTodo(index) {
        const newTodoList = [...todoList];
        console.log('before',newTodoList);
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
        console.log('after',newTodoList);
    }
    return (
        <div>
            {cac.name}
            <ul>
                {todoList.map((todo, index) => (
                    <li
                        key={todo}
                        onClick={() => removeTodo(index)}
                    >

                        {todo}
                    </li>
                ))}
            </ul>
        </div>
    )
}
