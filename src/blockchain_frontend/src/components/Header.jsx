import React from "react";
import { Link } from "react-router-dom";

export default function Header({ isCreatePostPage, handlerFunction }) {
	return (
		<div className="flex justify-between">
			<h1 className="text-2xl md:text-4xl text-center font-mono font-bold">
				PostPal
			</h1>
			{isCreatePostPage ? (
				<Link className="btn-primary" onClick={handlerFunction}>
					Save Post
				</Link>
			) : (
				<Link to={"/new"} className="btn-primary">
					Create Post
				</Link>
			)}
		</div>
	);
}


