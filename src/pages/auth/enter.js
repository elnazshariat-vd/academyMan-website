import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";

class Enter extends React.Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>

                <div className="flex h-44 items-center justify-center mt-10">
                    <div className="shadow-lg p-8 rounded">
                        <div className="font-bold">
                            ورود/ثبت نام حساب کاربری
                        </div>
                        <div className="mt-5 flex flex-col">
                            <label className="font-light">ایمیل</label>
                            <input type="text" className="border-2 rounded mt-1 p-2" placeholder="foo@bar.com" />
                        </div>
                        <div className="mt-5 w-full text-center">
                            <Link to="/auth/register" className="text-center w-full p-2 bg-green-500 rounded text-white hover:bg-green-600 cursor-pointer">ورود/ثبت نام</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Enter;