import { Observable, map } from "rxjs";
import { BaseViewModel } from "../../utils/vm/base-vm";
import { ToDoState } from "./todo.abstract";
import { ToDoMutations } from "./todo.abstract";

// нужен лоадер VM
// тесты для понимания что VM работает

export class ToDoViewModel extends BaseViewModel<ToDoState, ToDoMutations> {
    
    effects = (): Array<Observable<unknown>> => [
        this.state$.pipe(map((state) => state)),
    ];
}


// заменить это на лоадер VM
// const vm = new ToDoViewModel();
// vm.init(todoInitial.state);
// vm.load();

// function viewModelContext(vm, seed, children) => {
//     ...
//     <ContextProvider value={someValue}>
//     {children}
//     </ContextProvider>
// }