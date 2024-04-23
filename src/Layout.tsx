import { Outlet } from "react-router-dom";
import React from "react";
import HeaderHome from "./components/HeaderHome/HeaderHome";
import Footer from './components/Footer/Footer'
import MenuHome from './components/MenuHome/MenuHome'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="">
			{/* <MenuHome /> */}
			{/* <HeaderHome /> */}
			<div className="flex-1 p-4 min-h-0 overflow-auto" style={{ minHeight: '900px' }}>
				{children}
			</div>
			<Footer />
		</div>
	);
}

