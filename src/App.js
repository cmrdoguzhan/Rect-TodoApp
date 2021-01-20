import React, { useState } from "react";
import "./App.css";

import { Switch, Route, Link } from "react-router-dom";
import MainPage from "./components/Main";

function App() {
	const [isActive, setActive] = useState(false);
	const todoAppHandler = () => {
		setActive(!isActive);
	};
	return (
		<Switch>
			<Route path="/main" component={MainPage} />
			<Route path="/">
				<div style={{
					width: '100%',
					height: '480px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
					<Link to="/main">
						<button
							type="button"
							id="goTodoApp"
							onClick={todoAppHandler}
							className="todo-button"
						>
							{`Todo App`}
						</button>
					</Link>
				</div>
			</Route>
		</Switch>
	);
}

export default App;
