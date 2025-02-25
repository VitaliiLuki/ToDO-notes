import React from "react";
import styles from "./todo-header.module.css";

type ToDoHeaderProps = {
    onAddNew: () => void;
}

export const ToDoHeader: React.FC<ToDoHeaderProps> = ({onAddNew}) => {
    return (<header className={styles.headerContainer}>
        <button className={styles.newButton} onClick={onAddNew}>
            Add note
        </button>
    </header>);
};