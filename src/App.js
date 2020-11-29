import React from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <Provider store={store}>
            <Dashboard />
        </Provider>
    );
}

export default App;
