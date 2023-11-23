import { NavLink } from "react-router-dom"

export const Nav = () => {
	return (
		<nav>
			<ul className="flex gap-3 bg-red-200 py-3 px-5 rounded mb-4">
				<li><NavLink to="/welcome">Welcome</NavLink></li>
				<li><NavLink to="/about">About</NavLink></li>
			</ul>
		</nav>
	)
}