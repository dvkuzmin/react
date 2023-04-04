import React, { Component } from "react";

class Result extends Component {
    state = {
        data: null
    }

    componentDidMount() {
        const url = 'http://127.0.0.1:8000/test/'
        
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.props.answers)
        })
            .then((result) => result.json())
            .then((result) => {
                this.setState({
                    data: result
                })
            }
        )
    }

    render() {
        const { data } = this.state
        return <p>{data}</p>
    }
}

export default Result;
