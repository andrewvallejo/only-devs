export const reducer = (state, action) => {
	const {type, value} = action
	switch (type) {
		case 'SETQUESTION':
				return {
					...state,
					randomQuestion: value
				}	
		default:
			break;
	}
}