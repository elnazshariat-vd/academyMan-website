import React from "react";
import { Link } from "react-router-dom";
import Lessons from "./lessons";

class Navbar extends React.Component {
    constructor(props) { 
        super(props); 
        this.state = {
            showLessons: false
        }

        this.onToggleLessons = this.onToggleLessons.bind(this);
    }

    onToggleLessons() {
        console.log('hi');
        this.setState({
            showLessons: !this.state.showLessons
        })
    }

    render() {
        return (
            <div className="flex p-5 justify-between shadow">
                <div className="w-full flex items-center">
                    <div className="ml-10 text-green-500 font-black">آکادمی من</div>
                    <div onClick={this.onToggleLessons} className="cursor-pointer hover:text-green-600">دروس</div>
                </div>
                <div className="flex w-full justify-end items-center">
                    <Link to="auth/enter" className="bg-green-600 text-white p-2 hover:bg-green-500 rounded" href="#">ورود / ثبت نام</Link>
                </div>
                {this.state.showLessons && <Lessons toggle={this.onToggleLessons}></Lessons>}
            </div>
        )
    }
}

export default Navbar;