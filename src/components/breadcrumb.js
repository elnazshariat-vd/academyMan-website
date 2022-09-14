import React from "react";

class Breadcrumb extends React.Component {
    render() {
        return (
            <div className="flex px-5 py-2 bg-black text-white shadow-xl">
                <div>درس {this.props.title}</div>
            </div>
        )
    }
}

export default Breadcrumb;