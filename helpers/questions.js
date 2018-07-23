import store from "../state/store";
import actions from "../state/actions";

const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();
const ResponseCode = {
    error: 2,
    success: 0
};

const addQuestions = (error, data) => {
    if (error === null && data !== undefined && data.response_code !== ResponseCode.error) {
        let results = data.results.map((item, index) => {
            return { ...item, question: entities.decode(item.question), key: `${index}` };
        });
        store.dispatch({ type: actions.getQuestions, questions: results });
        return true;
    } else {
        return false;
    }
};

const editQuestion = (yourAnswer, index, questions) => {
    let isCorrect = yourAnswer === questions[index].correct_answer;
    if (isCorrect) {
        store.dispatch({ type: actions.incrementScore });
    }
    store.dispatch({ type: actions.editQuestions, isCorrect, index, yourAnswer });
};

const helpers = {
    addQuestions: addQuestions,
    editQuestion: editQuestion
};

export default helpers;