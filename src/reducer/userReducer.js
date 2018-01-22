export function userReducer (state , action = { type : '' }) {
	
	if (state == null){
		state = {
			users:{ 
				0 : {
					id : 0,
					name : 'emma',
					email : 'bbb@163.com'
				},
				1 : {
					id : 1,
					name : 'luna',
					email : 'aaa@qq.com'
				}
			}
		}
	}
	
	switch (action.type) {
		case 'CREATE_USER' : {
			return {
				...state,
				users : {
					...state.users,
					[action.payload.id] : {
						id : action.payload.id,
						name : action.payload.name,
						email : action.payload.email
					}
				}
			}
		} 
		case 'UPDATE_USER' : {
			return {
				...state,
				users : {
					...state.users,
					[action.payload.id] : {
						id : action.payload.id,
						name : action.payload.name,
						email : action.payload.email
					}
				}
			}
		} 
		default : {
			return state
		}
		
	}
}