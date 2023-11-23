// import * as React from "react";
// import { render } from "react-dom";
import { blockchain_backend } from "../../declarations/blockchain_backend";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./screens/CreatePost.jsx";
import Post from "./screens/Post";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "new",
		element: <CreatePost />,
	},
	{
		path: "/post/:id",
		element: <Post />,
	},
]);
ReactDOM.createRoot(document.getElementById("app")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
