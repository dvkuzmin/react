import React, { Component } from "react";
import Fireworks from 'fireworks-js';


class Result extends Component {
    state = {
        data: null
    }

    componentDidMount() {
        const url = 'https://dj-quiz.onrender.com/test/questions/'
        
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
        const fireworks = new Fireworks(document.getElementById('fireworks-container'));

        // Запускаем анимацию фейерверка
        fireworks.start();
    
        // Останавливаем анимацию фейерверка через 5 секунд
        setTimeout(() => {
          fireworks.stop();
        }, 3000);
    }

    render() {
        const { data } = this.state

        return  (
            <div className="conainer">
                <div id="fireworks-container">
                </div>
                <h2>{data}</h2>
            </div>
            

        )
    }
}

export default Result;
