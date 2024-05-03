import { Outlet } from "react-router-dom";
import React from "react";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default function CommonLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="">
            <Header />                    
            <div className="flex-1 p-4 min-h-0 overflow-auto" style={{ minHeight: '900px' }}>
                {children} 
            </div>
            <Footer />

        </div>
    );
}

