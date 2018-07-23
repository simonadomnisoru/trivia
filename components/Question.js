import React from "react";
import { Text, View, Button } from "react-native";
import store from "../state/store";
import styles from "../style/trivia";
import helpers from "../helpers/questions";

export default class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionsIndex: 0
        };
        this.questions = store.getState().questions;
    }

    handleAnwser = answer => {
        helpers.editQuestion(answer, this.state.questionsIndex, this.questions);
        if (this.state.questionsIndex < 9) {
            this.setState({ questionsIndex: this.state.questionsIndex + 1 });
        } else {
            this.props.navigate("EndGame");
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.questionCategory}> {this.questions[this.state.questionsIndex].category} </Text>
                <Text style={styles.questionName}> {this.questions[this.state.questionsIndex].question} </Text>
                <View style={styles.flexRow}>
                    <View style={[styles.flex__1, styles.marginRight__10]}>
                        <Button onPress={() => this.handleAnwser("True")} title="True" color="#0000ff" />
                    </View>
                    <View style={styles.flex__1}>
                        <Button onPress={() => this.handleAnwser("False")} title="False" color="#0000ff" />
                    </View>
                </View>
            </View>
        );
    }
}
