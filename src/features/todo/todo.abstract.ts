
export type ToDoNote = {
    id: number,
    text: string, // make text optional
}

export type ToDoState = {
    toDoNotes: Array<ToDoNote>
}

export type ToDoMutations = {
    editNote: {id: number, text: string}
    deleteNote:{noteId: number};
    createNote: void
}

export type ToDoStateMutations = {
    edit: (id: number, text: string) => void;
    delete: (noteId: number) => void;
    create: () => void;
}

