import React, { Component } from "react";
import QuestionUnit from './components/QuestionUnit';
import Result from "./components/Result";

// user_answers = [
//     {1: [1, 2]},
//     {2: [3, ]}
// ]


class App extends Component {


    state = {
        questions: [],
        questions_length: 0,
        current_question: 0
    }

    componentDidMount() {
        const url = 'http://127.0.0.1:8000/test/'

        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                let questions_length = result.length;
                this.setState({
                    questions: result,
                    questions_length: questions_length
                })
            })
    }

    onHandleNext = (answers) => {
        const { questions, current_question } = this.state
        if (current_question < questions.length) {
        this.setState({
            current_question: current_question + 1,
            user_answers: answers
            })
        }
    }

    onEndTest = () => {

    }

    render() {
        const { questions, questions_length, current_question } = this.state;
        
        if (questions.length !== 0) {
            if (current_question < questions_length) {
                console.log(questions, questions_length)
                return (
                    <QuestionUnit question={this.state.questions[current_question]} onHandleNext={this.onHandleNext} onEndTest={this.onEndTest} />
                )
            }   
            else {
                return (
                    <Result answers={this.state.user_answers}/>
                )
            }
        }
    }
}

export default App;
