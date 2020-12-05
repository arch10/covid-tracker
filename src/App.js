import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme, Header } from "./components";
import { Footer } from "./fragments";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

function App({ darkMode }) {
    return (
        <Router>
            <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                <GlobalStyles />
                <Header />
                <Routes />
                <Footer />
            </ThemeProvider>
        </Router>
    );
}
const mapStateToProps = (state) => {
    return {
        darkMode: state.preference.darkMode
    };
};
export default connect(mapStateToProps)(App);
