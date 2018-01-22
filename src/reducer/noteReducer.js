export function noteReducer (state , action = { type : '' }) {
	
	if (state == null){
		state = {
			notes:{ 
				0 : {
					id : 0,
					author : 'admin',
					note : 'hello note!'
				},
				1 : {
					id : 1,
					author : 'admin',
					note : 'how are you?'
				}
			}
		}
	}
	
	switch (action.type) {
		case 'CREATE_NOTE' : {
			return {
				...state,
				notes : {
					...state.notes,
					[action.payload.id] : {
						id : action.payload.id,
						author : action.payload.author,
						note : action.payload.note
					}
				}
			}
		} 
		case 'UPDATE_NOTE' : {
			return {
				...state,
				notes : {
					...state.notes,
					[action.payload.id] : {
						id : action.payload.id,
						author : action.payload.author,
						note : action.payload.note
					}
				}
			}
		} 
		default : {
			return state
		}
		
	}
}