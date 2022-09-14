import React from "react";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.fetchData.bind(this);
        this.sections.bind(this);
    }

    fetchData() {
        const data = {
            "id": 1,
            "name": "HTML",
            "sections": [
                {
                    "id": 1,
                    "name": "سلام دنیا"
                },
                {
                    "id": 2,
                    "name": "تگ a"
                }
            ] 
        }

        return data;
    }

    sections() {
        const data = this.fetchData();

        let elements = [];

        for(let i = 0; i < data.sections.length; i++) {
            elements.push(<a className="mb-2 cursor-pointer hover:text-green-600">
                {data.sections[i].name}
            </a>)
        }

        return elements;
    }

    render() {
        return (
            <div className="flex flex-col px-5 py-2 bg-gray-300 text-black w-96 min-h-screen">
                {this.sections()}
            </div>
        )
    }
}

export default Sidebar;