import { noteReducer } from './reducer/noteReducer' 
import { userReducer } from './reducer/userReducer'
import { combineReducers, createStore, applyMiddleware } from './lib/redux-ft/redux'

const reducer = combineReducers({ noteReducer, userReducer })

const loggingMiddleware = ({getState}) => next => action => {
	console.info('before', getState())
	console.info('action', action)
	const result = next(action)
	console.info('after', getState())
	return result
}

const thunkMiddleware = ({dispatch, getState}) => next => action => {
	if (typeof action === 'function') {
		return action({dispatch, getState})
	}
	return next(action)
}

const bundelMiddelware = applyMiddleware(
	thunkMiddleware,
	loggingMiddleware
)

export const store = createStore(reducer, bundelMiddelware)