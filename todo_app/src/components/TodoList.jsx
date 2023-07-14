import { useState } from "react"
import styles from "../css files/TodoList.module.css"
import uuid from 'react-uuid';


export default function TodoList() {

    let data = {
        id: "",
        name: "",
        status: false
    }

    const [todos, setTodos] = useState(data)
    const [AllTodos, setAllTodos] = useState([])

    function handleChange(e) {
        let { name, value } = e.target;

        setTodos((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    function addTodo() {
        setTodos((prevFormData) => ({
            ...prevFormData,
            id: uuid()
        }));
        setAllTodos([...AllTodos, todos])

    }

    function changeStatus(id) {
        const updatedTodos = AllTodos.map((item) =>
            item.id === id ? { ...item, status: true } : item
        );
        setAllTodos(updatedTodos)
    }

    function handleDelete(id) {
        const updatedTodos = AllTodos.filter((item) => item.id !== id);
        setAllTodos(updatedTodos);
    }

    console.log(AllTodos)
    const { name } = todos;

    return (
        <div className={styles.container}>
            <div className={styles.leftDiv}>
                <div className={styles.topDiv}>
                    <div>
                        <input name="name" onChange={handleChange} value={name} type="text" placeholder="Enter task name" />
                    </div>

                    <div>
                        <button onClick={addTodo}>ADD</button>
                    </div>

                </div>

                <div className={styles.todoDiv}>
                    {
                        AllTodos.map((ele) => (
                            <div>
                                <div>
                                    <p>Task name :</p>
                                    <p>{ele.name}</p>
                                </div>

                                <div>
                                    <p>Status : </p>
                                    <p style={ele.status?{"color":"green"}:{"color":"red"}}
                                    >{ele.status === true ? "Completed" : "In Progress"}</p>
                                </div>

                                <div className={styles.todoDivButtons}>
                                    <button onClick={() => changeStatus(ele.id)}>Mark Completed</button>
                                    <button onClick={() => handleDelete(ele.id)}>Delete task</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>



            <div className={styles.rightDiv}>
                <div>
                    <div>
                        <h2>Total Tasks : </h2>
                        <h2>{AllTodos.length}</h2>
                    </div>

                    <div>
                        <h2>In Progress : </h2>
                        <h2>{AllTodos.filter((item) => item.status == false).length}</h2>
                    </div>

                    <div>
                        <h2>Completed : </h2>
                        <h2>{AllTodos.filter((item) => item.status == true).length}</h2>
                    </div>

                </div>
            </div>
        </div>
    )
}