// import { divide } from "lodash";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/main";
import NavBar from "./components/navBar";
import Login from "./components/login";
import Users from "./components/users";
import UserPage from "./components/userPage";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/main" component={Main} />
                <Route path="/login" component={Login} />
                <Route
                    path="/users/:userId"
                    render={(props) => <UserPage {...props} />}
                />
                <Route path="/users" component={Users} />
            </Switch>
        </div>
    );
}

export default App;
