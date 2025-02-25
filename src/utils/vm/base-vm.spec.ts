import { BehaviorSubject, Observable } from "rxjs";
// const { BehaviorSubject } = require("rxjs");
// const { Observable } = require("rxjs");

// THIS PART IN PROGRESS

type State = {
  text: string;
};

const initialState: State = {
  text: ""
};

const mutations = {
  edit: (state: State, payload: string): State => {
    return { ...state, text: payload };
  },
  delete: (state: State): State => {
    return { ...state, text: "" };
  }
};

class Store {
  private readonly _state$ = new BehaviorSubject<State>(initialState);

  public readonly state$: Observable<State> = this._state$.asObservable();

  get value(): State {
    return this._state$.getValue();
  }

  edit(payload: string) {
    const current = this.value; 
    const newState = mutations.edit(current, payload);
    this._state$.next(newState);
  }

  delete() {
    const current = this.value;
    const newState = mutations.delete(current);
    this._state$.next(newState);
  }
}

export const store = new Store();

store.edit("Hello world!");
store.state$.subscribe(state => {
  console.log("New state:", state);
});

