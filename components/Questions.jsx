import React from "react";
import { ActivityIndicator, Text, View, StyleSheet, Button } from "react-native";
import api from "../api/questions";
import Question from "./Question";
import store from "../state/store";
import actions from "../state/actions";
import styles from "../style/trivia";

const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();
const Loading = () => <ActivityIndicator size="large" color="#0000ff" />;
const Error = () => <Text> An error occured. </Text>;
const QuestionsStates = navigate => ({
    Loading: <Loading />,
    Question: <Question navigate={navigate} />,
    Error: <Error />
});
const ResponseCode = {
    error: 2,
    success: 0
};
export default class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "Loading"
        };
    }
    componentDidMount() {
        api(this.cbSuccess);
    }
    cbSuccess = (error, data) => {
        if (error === null && data !== undefined && data.response_code !== ResponseCode.error) {
            let results = data.results.map((item, index) => {
                return { ...item, question: entities.decode(item.question), key: `${index}` };
            });
            store.dispatch({ type: actions.getQuestions, questions: results });
            this.setState({ status: "Question" });
        } else {
            this.setState({ status: "Error" });
        }
    };

    render() {
        const { navigate } = this.props.navigation;
        return <View style={[styles[`question${this.state.status}`], styles.container]}>{QuestionsStates(navigate)[this.state.status]}</View>;
    }
}
