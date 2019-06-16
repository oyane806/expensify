import React from "react";
import { NavLink } from "react-router-dom";
import wallet from "../../public/wallet.png"

const Header = () => (
	<header>
		<h1>Expensify</h1>
		<img src={wallet} />
		<div className="nav-bar">
		<NavLink to="/" activeClassName="is-active" exact={true} className="link">Dashboard</NavLink>
		<NavLink to="/create" activeClassName="is-active" className="link">Create Expense</NavLink>
		<NavLink to="/help" activeClassName="is-active" className="link">Help</NavLink>
		</div>
	</header>
);

export default Header;