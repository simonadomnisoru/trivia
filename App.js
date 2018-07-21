import React from "react";
import Home from "./components/Home";
import Questions from "./components/Questions";
import EndGame from "./components/EndGame";
import { createStackNavigator } from "react-navigation";

const MystackNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Questions: { screen: Questions },
        EndGame: { screen: EndGame }
    },
    {
        headerMode: "none"
    }
);

export default class App extends React.Component {
    render() {
        return <MystackNavigator />;
    }
}
