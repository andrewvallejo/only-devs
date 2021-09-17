export const reducer = (state, { action }) => {
	const { type, value } = action
	switch (type) {
		case 'SETRANDOMQUESTION':
			return {
				...state,
				randomQuestion: value
			}
		case 'SETQUESTION':
			return {
				...state,
				selectedQuestion: value
			}
			case 'SETQUESTIONS':
				return {
					...state,
					questions: value
			}
		case 'SETANSWERS': 
			return {
				...state,
				answers: value
			}
		default:
			return state
	}
}