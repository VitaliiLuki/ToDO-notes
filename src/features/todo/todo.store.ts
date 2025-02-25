import { ToDoNote } from "./todo.abstract";

const todoKey = "todo-notes";

const initiateNotesStore = () => {
    if (!localStorage.getItem(todoKey)) {
        localStorage.setItem(todoKey, JSON.stringify([]));
    }
};

initiateNotesStore();


/**
 * returns all notes 
 */ 
export const getAllNotes = (): ToDoNote[] => {
    const notes = localStorage.getItem(todoKey);
    if (!notes) return [];

    const retrievedNotes: ToDoNote[] = JSON.parse(notes);
    return retrievedNotes;

};

/**
 * returns certain note
 * @id number note id
 */ 
export const getSingleNote = (id: number): ToDoNote | undefined => {
    const retrievedNotes = getAllNotes();
    const note = retrievedNotes.find((note) => note.id === id);
    return note;

};

/**
 * adds certain note
 * @obj ToDoNote
 */ 
export const addToNotes = (obj: ToDoNote) => {
    const notes = getAllNotes();

    const notesToJSON = JSON.stringify([...notes, obj]);

    localStorage.setItem(todoKey, notesToJSON);
};

/**
 * edit certain note
 * @obj ToDoNote
 */ 
export const editStoreNotes = (noteObj: ToDoNote) => {
    const notes = getAllNotes().map((note) => {
        if (note.id === noteObj.id) {
            return noteObj;
        }

        return note;
    });
    const notesToJSON = JSON.stringify(notes);

    localStorage.setItem(todoKey, notesToJSON);
};


/**
 * removes certain note
 * @id number
 */ 
export const removeNote = (id: number) => {
    const retrievedNotes = getAllNotes();
    const notes = retrievedNotes.filter((note) => note.id !== id);
    const notesToJSON = JSON.stringify(notes);
    localStorage.setItem(todoKey, notesToJSON);
};


/**
 * clear all notes from storage
 * @id number
 */ 
export const clearAllNotes = () => {
    const notesToJSON = JSON.stringify([]);
    localStorage.setItem(todoKey, notesToJSON);
};