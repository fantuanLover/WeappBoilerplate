export function combineReducers (reducers) {
  // First get an array with all the keys of the reducers (the reducer names)
  const reducerKeys = Object.keys(reducers);

  return function combination(state = {}, action) {
    // This is the object we are going to return.
    const nextState = {}

    // Loop through all the reducer keys
    for (let i = 0; i < reducerKeys.length; i++) {
		// Get the current key name 
		const key = reducerKeys[i];
		// Get the current reducer
		const reducer = reducers[key]
		// Get the the previous state
		const previousStateForKey = state[key]
		// Get the next state by running the reducer
		const nextStateForKey = reducer(previousStateForKey, action)
		// Update the new state for the current reducer
		nextState[key] = nextStateForKey;
    }
    return nextState;
  }
}

export function createStore (reducer, middleware) {
	let state
	const subscribers = []
	const coreDispatch = ( action ) => {
		state = reducer(state, action)
		subscribers.forEach(handler => handler())
	}
	const getState = () => state
	const store = {
		dispatch: coreDispatch,
		getState,
		subscribe: ( handler ) => {
			subscribers.push(handler)
			return () => {
				const index = subscribers.indexOf(handler)
				if (index > 0) {
					subscribers.splice(index, 1)
				}
			}
		}
	}
	if (middleware) {
		const dispatch = action => store.dispatch(action)
		store.dispatch = middleware({
			dispatch,
			getState
		})(coreDispatch)
	}
	coreDispatch({})
	return store
}

export function applyMiddleware (...middlewares) {
	return (store) => {
		if (middlewares.length === 0) {
			return dispatch => dispatch
		}
		if (middlewares.length === 1) {
			return middlewares[0]
		}
		const boundMiddlewares = middlewares.map(middleware =>
			middleware(store)
		)
		return boundMiddlewares.reduce((a, b) =>
			next => a(b(next))
		)
	}
}
