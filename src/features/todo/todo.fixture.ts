import { ToDoState, ToDoNote, ToDoStateMutations } from "./todo.abstract";
import { obj } from "../../utils/object/utils";

export type AbstractContext<Tstate, TMutations> = {
    state: Tstate,
    mutations: TMutations
}

export const todoInitial: AbstractContext<ToDoState, ToDoStateMutations> = {
    state: {
        toDoNotes: [],
    },
    mutations: {
        edit: obj.constVoid,
        delete: obj.constVoid,
        create: obj.constVoid,
    }
};

