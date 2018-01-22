export function createNote(id, author, note) {
	return {
		type: 'CREATE_NOTE',
		payload: {
			id : id,
			author : author,
			note : note
		}
	}
}


export function updateNote(id, author, note) {
	return {
		type: 'UPDATE_NOTE',
		payload: {
			id : id,
			author : author,
			note : note
		}
	}
}

