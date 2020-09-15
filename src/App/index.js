import React, { Suspense } from "react";
import { hot } from "react-hot-loader";
import { Switch, Route, Redirect } from "react-router-dom";

import Main from "./Pages/Main/Main.jsx";

class App extends React.Component {
	render() {
		return (
			<div className="SiteWrapper">
				<Switch>
					<Route path="/" component={Main} exact />
				</Switch>
			</div>
		);
	}
}

export default hot(module)(App);
