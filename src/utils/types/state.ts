export type StateMutations<TState extends Record<string, any>, TMutations extends Record<string, any>> = {
    [K in keyof TMutations]: (state: TState, payload: TMutations[K]) => TState
}

export type StateEffect<TState> = {name: string, project: (state: TState) => TState}

export type State<TState extends Record<string, any>, TMutations extends Record<string, any>> = {
    seed: TState,
    mutations: StateMutations<TState,TMutations>,
    effects: Array<StateEffect<TState>>
};
