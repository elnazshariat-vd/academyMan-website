import React from "react";
import Breadcrumb from "../components/breadcrumb";
import Content from "../components/content";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

class Index extends React.Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Breadcrumb title="HTML"></Breadcrumb>
                <div className="flex">
                    <Sidebar></Sidebar>
                    <Content></Content>
                </div>
            </div>
        )
    }
}

export default Index;