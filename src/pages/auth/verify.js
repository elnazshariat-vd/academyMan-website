import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";

class Verify extends React.Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>

                <div className="flex h-70 items-center justify-center mt-10">
                    <div className="shadow-lg p-8 rounded">
                        <div className="font-bold">
                            تایید ایمیل جهت ورود
                        </div>
                        <div className="mt-5 flex flex-col">
                            <label className="font-light">کد اعتبارسنجی</label>
                            <input type="text" className="border-2 rounded mt-1 p-2" placeholder="xxxx" />
                        </div>
                        <div className="mt-5 text-center">
                            <Link to="/" className="text-center w-full p-2 bg-green-500 rounded text-white hover:bg-green-600 cursor-pointer">بررسی</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Verify;