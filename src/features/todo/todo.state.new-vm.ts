import { ToDoState } from "./todo.abstract";
import { getBiggestId } from "../../utils/array/utils";
import { State } from "../../utils/types/state";
import { ToDoMutations } from "./todo.abstract";

export const InitialState: ToDoState = {toDoNotes: []};

// TODO: add local storage handling
export const ToDOStateObj: State<ToDoState, ToDoMutations> = {
    seed: InitialState,
    mutations: {
        editNote: (state, {id, text}) => {
            const notes = state.toDoNotes.map((note) => {
                if (note.id === id) return {id, text};
        
                return note;
                });
    
            return {...state, toDoNotes: notes};
        },
        deleteNote: (state, {noteId}) => {
            return {
                ...state,
                toDoNotes: state.toDoNotes.filter((note) => note.id !== noteId)
            };
        },
        createNote: (state) => {
            const theBiggestId = getBiggestId(state.toDoNotes);
    
            if (!theBiggestId) {
                return {...state, toDoNotes: [{id: 1, text: ""}]};
            } else {
                return {...state, toDoNotes: [...state.toDoNotes, {id: theBiggestId + 1, text: ""}]
                };    
            }
        }
    },
    effects: []
};
