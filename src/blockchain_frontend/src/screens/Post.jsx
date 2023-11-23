import React, { useState, useEffect } from "react";
import {
	Link,
	useParams,
} from "../../../../node_modules/react-router-dom/dist/index";
import Header from "../components/Header";
import { blockchain_backend } from "../../../declarations/blockchain_backend";

export default function Post() {
	const { id } = useParams();

	const [post, setPost] = useState({});

	async function getPost() {
		const res = await blockchain_backend.getPost(+id);
		setPost(res[0]);
	}
	useEffect(() => {
		getPost();
	}, [id]);

	return (
		<>
			<main>
				<Header /> <div></div>
				{post ? (
					<div className="my-5 card h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-4 overflow-x-hidden overflow-y-scroll">
						<h2 className="text-3xl">{post?.title}</h2>
						<p>{post?.content}</p>
					</div>
				) : (
					<>
						<div className="my-20 text-center">
							<h2 className="my-5">Post Not Found</h2>
							<Link to="/" className="btn-primary w-max mx-auto">
								Return to Home
							</Link>
						</div>
					</>
				)}
				<div className="my-5"></div>
			</main>
		</>
	);
}
