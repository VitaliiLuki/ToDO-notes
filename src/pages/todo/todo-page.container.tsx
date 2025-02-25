import React, {useContext} from "react";
import { ToDoContext } from "../../features/todo/todo.view-model";
import styles from "./todo.module.css";
import { SingleNote } from "../../features/todo/components/note/note.component";
import { ToDoHeader } from "../../features/todo/components/header/todo-header.component";

export const ToDoPage = () => {
    const {state, mutations} = useContext(ToDoContext);
    const {toDoNotes} = state;
    const { edit, create, delete: deleteNote } = mutations;
    
    return (
    <div className={styles.container}>
        <ToDoHeader onAddNew={create}/>
        <main className={styles.mainContainer}>
            {toDoNotes.map((note) => <SingleNote key={note.id} note={note} onClickRemove={deleteNote} onEditNote={edit}/>)}
        </main>
    </div>
    );
};