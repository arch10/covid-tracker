import React from "react";
import Dashboard from "./pages/Dashboard";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./components";

function App({ darkMode }) {
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Dashboard />
        </ThemeProvider>
    );
}
const mapStateToProps = (state) => {
    return {
        darkMode: state.preference.darkMode
    };
};
export default connect(mapStateToProps)(App);
