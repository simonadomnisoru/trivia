import React from "react";
import { Text, View, Button } from "react-native";
import store from "../state/store.js";
import actions from "../state/actions.js";
import styles from "../style/trivia.js";

let questions = [];
const storeAnswer = (answer, index) => {
    let isCorrect = answer === questions[index].correct_answer;
    if (isCorrect) {
        store.dispatch({ type: actions.incrementScore });
    }
    store.dispatch({ type: actions.editQuestions, isCorrect: isCorrect, index: index, yourAnswer: answer });
};

export default class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionsIndex: 0
        };
        questions = store.getState().questions;
    }

    handleAnwser = answer => {
        storeAnswer(answer, this.state.questionsIndex);
        if (this.state.questionsIndex < 9) {
            this.setState({ questionsIndex: this.state.questionsIndex + 1 });
        } else {
            this.props.navigate("EndGame");
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.questionCategory}> {questions[this.state.questionsIndex].category} </Text>
                <Text style={styles.questionName}> {questions[this.state.questionsIndex].question} </Text>
                <Button onPress={() => this.handleAnwser("True")} title="True" />
                <Button onPress={() => this.handleAnwser("False")} title="False" />
                <Text style={styles.questionPagination}> {this.state.questionsIndex + 1}/10 </Text>
            </View>
        );
    }
}
