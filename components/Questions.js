import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import api from "../api/questions";
import Question from "./Question";
import styles from "../style/trivia";
import helpers from "../helpers/questions";

const Loading = () => <ActivityIndicator size="large" color="#0000ff" />;
const Error = () => <Text> An error occured. </Text>;
const QuestionsStates = navigate => ({
    Loading: <Loading />,
    Question: <Question navigate={navigate} />,
    Error: <Error />
});
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
        const status = helpers.addQuestions(error, data) ? "Question": "Error";
        this.setState({ status: status });
    };
    render() {
        const { navigate } = this.props.navigation;
        return <View style={[styles[`question${this.state.status}`], styles.container]}>{QuestionsStates(navigate)[this.state.status]}</View>;
    }
}