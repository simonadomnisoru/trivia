import actionTypes from "./actions";

function reducerQuestions(state, action) {
	switch (action.type) {
		case actionTypes.incrementScore:
			return {
				...state,
				score: state.score + 1
			}
		case actionTypes.getQuestions:
			return {
				...state,
				questions: action.questions,
				score: 0
			}
		case actionTypes.editQuestions:
			let newQuestions = [...state.questions];
			newQuestions[action.index] = { ...newQuestions[action.index],
				isCorrect: action.isCorrect,
				yourAnswer: action.yourAnswer
			}
			return {
				...state,
				questions: newQuestions
			}
		default:
			return state
	}
}
export default reducerQuestions;