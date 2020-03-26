import React, { useState, useEffect } from 'react';
import Todo from './Todo'

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function Formulario() {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTodos) {
            setList(storageTodos);
        }
    }, [])

    const addTodo = (e) => {
        e.preventDefault()
        const getDate = new Date().toLocaleString()
        const newList = list;
        newList.unshift({ task: input, createAt: getDate, isCompleted: false });
        setList([...newList]);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list))
        setInput(""); //borrar input junto con el value del input
        //document.getElementById('input').value="";
    }

    const deleteTodo = (index) => {
        console.log(index)
        var newList = list;
        newList.splice(index, 1);
        setList([...newList])
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newList))
    }

    const completed = (index) => {
        var newList = list;
        newList[index].isCompleted = !newList[index].isCompleted
        setList([...newList])

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newList))

    }

    return (
        <div>
            <div className=" center has-background-link has-text-white title  column   " >
                <label className="createdBy subtitle is-6 has-text-white">Creado por © Jose Luis</label>
                <h1>To Do...</h1>
                <form onSubmit={addTodo}>
                    <input id="input" type="text" value={input} onChange={(e) => { setInput(e.target.value) }}></input>
                    <button type="button" onClick={addTodo}> Add </button>

                </form>
            </div>
            {list.map(({ task, createAt, isCompleted }, index) => ( //Usar Key XDXDXDxd
                <Todo key={index} index={index} task={task} createAt={createAt} isCompleted={isCompleted} completed={completed} deleteTodo={deleteTodo} />

            ))}
        </div>
    )
}

export default Formulario;