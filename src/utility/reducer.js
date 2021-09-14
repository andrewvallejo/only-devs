export const reducer = (state, { action }) => {
	const { type, value } = action
	switch (type) {
		case 'SETQUESTION':
			return {
				...state,
				question: value
			}
		case 'SETQUESTIONS':
			return {
				...state,
				questions: value
			}
		default:
			return state
	}
} 