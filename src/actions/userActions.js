export function createUser(id, name, email) {
	return {
		type: 'CREATE_USER',
		payload: {
			id : id,
			name : name,
			email : email
		}
	}
}


export function updateUser(id, name, email) {
	return {
		type: 'UPDATE_USER',
		payload: {
			id : id,
			name : name,
			email : email
		}
	}
}