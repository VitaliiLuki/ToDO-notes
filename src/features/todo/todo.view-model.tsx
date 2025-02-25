import React, { createContext, useCallback, useEffect, useState } from "react";
import { todoInitial } from "./todo.fixture";
import { ToDoNote } from "./todo.abstract";
import { getBiggestId } from "../../utils/array/utils";

import { addToNotes, getAllNotes, removeNote, editStoreNotes } from "./todo.store";
import { ToDoViewModel } from "./todo.new-vm";

type ToDoProviderProps = {
    children: React.ReactNode;
  };

export const vm = new ToDoViewModel();
export const ToDoContext = createContext(todoInitial);

// TODO: add option to download/upload as .txt  
export const ToDoContextProvider: React.FC<ToDoProviderProps> = ({children}) => {
    const [toDoNotes, setToDoNotes] = useState<ToDoNote[]>([]);


    const editNote = useCallback((id: number, text: string) => {
        const notes = toDoNotes.map((note) => {
            if (note.id === id) return {id, text};

            return note;
            });

        editStoreNotes({id, text});
        setToDoNotes(notes);

    },[toDoNotes]);

    const deleteNote = useCallback((id: number) => {
        setToDoNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
        removeNote(id);
    }, []);

    const addNote = useCallback(() => {
        const theBiggestId = getBiggestId(toDoNotes);

        if (!theBiggestId) {
            setToDoNotes([{id: 1, text: ""}]);
            addToNotes({id: 1, text: ""});
        } else {
            setToDoNotes((prevNotes) => ([...prevNotes, {id: theBiggestId + 1, text: ""}]));
            addToNotes({id: theBiggestId + 1, text: ""});
        }        

    }, [toDoNotes]);

    useEffect(() => {
        setToDoNotes(getAllNotes());
        vm.init(todoInitial.state);
        vm.load();

        console.log("XXX vm", {state: vm.state, obs: vm.state$});

        () => {return vm.unload();};
        

    }, []);


    return (
        <ToDoContext.Provider value={
            {
                state: {
                    toDoNotes: toDoNotes
                },
                mutations: {
                    edit: editNote,
                    delete: deleteNote,
                    create: addNote,
                }
            }
        }>
        {children}
    </ToDoContext.Provider>);

};