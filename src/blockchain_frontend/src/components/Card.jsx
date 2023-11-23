import React from "react";
import { Link } from "../../../../node_modules/react-router-dom/dist/index";

export default function Card({ post, id }) {
	return (
		<Link
			to={`post/${id}`}
			className="block duration-100 hover:-translate-y-1 hover:shadow-sm hover:shadow-white"
		>
			<div className="card h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-4 overflow-x-hidden max-h-80 overflow-y-scroll">
				<h2 className="text-2xl">{post.title}</h2>
				<p className="text-base leading-normal tracking-wider">
					{post.content}
				</p>
			</div>
		</Link>
	);
}
