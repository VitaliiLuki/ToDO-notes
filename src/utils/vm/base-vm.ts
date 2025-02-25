import { map, Observable, of, BehaviorSubject, Subscription, merge, mergeAll, scheduled, tap } from "rxjs";
import { StateMutations } from "../types/state";
// I need a function or class which initialize the seed of current state<T> and save it for state$
// it has a number of mutations 
// how to initialize view model ?

export abstract class BaseViewModel<TState extends Record<string, unknown>, TMutations extends Record<string, unknown>> {
    // abstract accumulator: StateMutations<TState, TMutations>
    abstract effects: () => Array<Observable<unknown>>;
    private _state$!: BehaviorSubject<TState>;

    init(seed: TState) {
        this._state$ = new BehaviorSubject(seed);
    }

    get state$(): Observable<TState> {
        return this._state$.asObservable();
    }

    get state(): TState {
        return this._state$.getValue();
    }

    mainSub!: Subscription;

	effectsSub!: Subscription;

    load() {
        this.mainSub = this._state$.subscribe();
        this.effectsSub = merge(...this.effects()).subscribe();
    }

    unload() {
        this.mainSub.unsubscribe();
        this.effectsSub.unsubscribe();
    }
}