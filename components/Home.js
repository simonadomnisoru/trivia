import React from "react";
import { Button, Text, View } from "react-native";
import styles from "../style/trivia.js";

export default class Home extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.homeWelcome}> Welcome to the Trivia Challenge!</Text>
                <Text style={styles.homeTitle}> You will be resented with 10 True or False questions</Text>
                <Text style={styles.homeScore}> Can you score 100%?</Text>
                <Text>
                    <Button onPress={() => this.props.navigation.navigate("Questions")} title="Begin" color="#841584" />
                </Text>
            </View>
        );
    }
}
