import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { blockchain_backend } from "../../../declarations/blockchain_backend";

export default function CreatePost() {
	const [content, setContent] = useState("");
	const [title, setTitle] = useState("");

	const navigator = useNavigate();
	async function savePost() {
		const res = await blockchain_backend.addPost({ title, content });
		navigator("../");
		// TODO: Send Post to Backend and Save it
	}
	return (
		<main>
			<Header isCreatePostPage={true} handlerFunction={savePost} />
			<div className="my-5">
				<div className="my-2">
					<label>
						Post Title
						<br />
						<input
							type="text"
							name="title"
							onChange={(e) => setTitle(e.target.value)}
							className="text-black"
						/>
					</label>
				</div>
				<div className="my-2">
					<label>Post Description</label>
					<textarea
						name="content"
						className="w-full min-h-[300px] text-black"
						onChange={(e) => setContent(e.target.value)}
					/>
				</div>
			</div>
		</main>
	);
}
