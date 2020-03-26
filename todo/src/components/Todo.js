import React from 'react';

function Todo ({index, task, createAt, isCompleted, completed, deleteTodo }){

//a ver si no truena


    return (
        <div className=" divContainer flex" key={index}>
            <div className=" borderRadius has-background-grey-lighter   center  ">
                <div className="container">
                    <div className="flex ">
                        <input className="flex checkbox  divCheckb" type="checkbox" onChange={() => { completed(index) }} checked={isCompleted}></input>
                        <div className="">
                            <div className="title " style={{ textDecoration: isCompleted ? "line-through" : 'none' }} >{task}</div>
                            <div className="subtitle is-6 has-text-grey	" >Creado: {createAt}</div>

                        </div>
                        <div className="" >
                            <input className=" delBoton button has-background-danger has-text-white  " type="button" value="X" onClick={() => { deleteTodo(index) }} ></input>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}


export default Todo;