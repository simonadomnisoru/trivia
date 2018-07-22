import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "powderblue",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    homeWelcome: {
        fontSize: 22,
        marginBottom: 20,
        fontWeight: "bold"
    },
    homeTitle: {
        fontSize: 15,
        marginBottom: 10
    },
    homeScore: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 50,
        fontStyle: "italic"
    },
    questionLoading: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        padding: 10
    },
    questionCategory: {
        fontSize: 18,
        marginBottom: 10
    },
    questionName: {
        marginBottom: 10
    },
    questionPagination: {
        marginTop: 50
    },
    endGameResulttrue: {
        color: "green"
    },
    endGameResultfalse: {
        color: "red"
    },
    endGameText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 15
    },
    endGameScore: {
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "italic",
        marginBottom: 10
    },
    endGameQuestion: {
        marginBottom: 10
    }
});

module.exports = homeStyles;
