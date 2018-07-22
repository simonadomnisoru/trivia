import React from "react";
import { Text, View, Button, FlatList } from "react-native";
import store from "../state/store";
import styles from "../style/trivia";

const displayQuestions = questions => (
    <FlatList
        data={questions}
        renderItem={({ item, index }) => (
            <View style={[styles.flexColumn, styles.endGameQuestion]}>
                <View style={[styles.flex__1]}>
                    <Text style={styles[`endGameResult${item.isCorrect}`]}>
                        {index + 1} {item.question}
                    </Text>
                </View>
                <View style={[styles.flex__1]}>
                    <Text> Your answer was: {item.yourAnswer} </Text>
                </View>
            </View>
        )}
    />
);
export default class EndGame extends React.PureComponent {
    constructor(props) {
        super(props);
        this.questions = store.getState().questions;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.endGameText}>End game</Text>
                <Text style={styles.endGameScore}>You Scored {store.getState().score}/ 10</Text>
                {displayQuestions(this.questions)}
                <Button onPress={() => this.props.navigation.navigate("Home")} title="Play Again"  color={styles.themeColor.color} />
            </View>
        );
    }
}
