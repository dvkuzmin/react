import React, { Component } from "react";
import QuestionUnit from './components/QuestionUnit';
import Result from "./components/Result";
import Category from "./components/Category";

// user_answers = [
//     {1: [1, 2]},
//     {2: [3, ]}
// ]


class App extends Component {

    state = {
        questions: [],
        questions_length: 0,
        current_question: 0,
        categories: [],
        categoryId: null
    }

    componentDidMount() {
        const url = 'https://dj-quiz.onrender.com/test/categories/'

        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                this.setState({
                    categories: result,
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

    onChooseCategory = (categoryId) => {
        this.setState({categoryId: categoryId})
        const url = 'https://dj-quiz.onrender.com/test/questions/' + `${categoryId}/`

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


    render() {
        const { questions, questions_length, current_question, categories } = this.state;

        if (!this.state.categoryId && this.state.categories) {
            return <Category categories={categories} onChooseCategory={this.onChooseCategory} />
        }

        if (questions.length !== 0) {
            if (current_question < questions_length) {
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
