import { Outlet } from "react-router-dom";
import React from "react";
import { Header } from './components/Header'
import Footer from './components/Footer'

export default function Layout() {
	return (
		<div className="">
			<Header />
			<div className="flex-1 p-4 min-h-0 overflow-auto">
				<Outlet />
			</div>
		</div>
	)
}