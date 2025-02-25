import React from "react";
import { ToDoNote} from "../../todo.abstract";
import styles from "./note.module.css";
import { RemoveIcon } from "../../../../components/remove-icon/remove-icon.component";

type NoteProps = {
    note: ToDoNote
    onClickRemove: (id: number) => void;
    onEditNote: (id: number, text: string) => void;
}

export const SingleNote: React.FC<NoteProps> = ({note, onClickRemove, onEditNote}) => {
    const [visible, setVisible] = React.useState<boolean>(false);

    const handleOnClick = React.useCallback(() => 
        onClickRemove(note.id) , [note.id, onClickRemove]);

    const handleOnChange = React.useCallback((text: string) => {
        onEditNote(note.id, text);
    }, [note.id, onEditNote]);

    return (
    <div className={styles.noteContainer} 
        onMouseEnter={(_) => setVisible(true)} 
        onMouseLeave={(_) => setVisible(false)}>
        <h3 className={styles.title}>Запись: {note.id}</h3>
        <textarea className={styles.content} 
            onChange={(e) => handleOnChange(e.target.value)}
            value={note.text}
            name="" id=""></textarea>
        <RemoveIcon onClickIcon={handleOnClick} isVisible={visible}/>
    </div>
    );
};