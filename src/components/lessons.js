import React from "react";

class Lessons extends React.Component {
    constructor(props) { 
        super(props); 

        this.fetchData.bind(this);
        this.categories.bind(this);
        this.lessons.bind(this);
    }

    render() {
        return (
            <div className="fixed inset-0 flex flex-col p-8 bg-black text-white shadow-xl z-50">
                <div onClick={this.props.toggle} className="text-red-500 cursor-pointer hover:bg-red-600 hover:text-white w-16 rounded p-2 text-center">خروج</div>

                <div className="grid grid-flow-col auto-cols-max gap-16 mt-8">
                {this.categories()}
                </div>
            </div>
        )
    }

    categories() {
        const data = this.fetchData();

        let elements = [];

        for(let i = 0; i < data.length; i++) {
            elements.push(<div>
                <h2 className="text-yellow-500 font-bold text-lg">{data[i].name}</h2>
                <div className="flex flex-col pt-5">
                    {this.lessons(data[i].lessons)}
                </div>
            </div>)
        }

        return elements;
    }

    lessons(lessons) {
        let elements = [];

        for(let i = 0; i < lessons.length; i++) {
            elements.push(<a className="mb-2">
                {lessons[i].name}
            </a>)
        }

        return elements;
    }

    fetchData() {
        const data = [
            {
                "id": 1,
                "name": "برنامه نویسی وب",
                "lessons": [
                    {
                        "id": 1,
                        "name": "HTML"
                    },
                    {
                        "id": 2,
                        "name": "CSS"
                    }
                ]
            },
            {
                "id": 2,
                "name": "برنامه نویسی سمت سرور",
                "lessons": [
                    {
                        "id": 3,
                        "name": "PHP"
                    },
                    {
                        "id": 4,
                        "name": "Laravel"
                    }
                ]
            }
        ];

        return data;
    }
}

export default Lessons;