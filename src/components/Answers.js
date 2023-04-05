import React, { Component } from "react";

class Answers extends Component {
    state = {
    }

    handleInputChange = (event) => {
        const { target } = event
        const { name, checked } = target
        const {id} = this.props.question
        
        this.setState({
            [id]: {
                ...this.state[id],
                [name]: checked
            }
        })
    }


    render() {
        let { answers } = this.props.question

        let list_answers = answers.map((answer) => {
            return  (
                <label key={answer.id} >
                    {answer.text}
                    <input
                    name={answer.id}
                    type='checkbox'
                    checked={this.state.name}
                    onChange={this.handleInputChange}/>
                </label>
            )
        }
        )
        return (
            <form onSubmit={(event) =>{
                event.preventDefault()
                return this.props.onHandleNext(this.state)}
            }>
                {list_answers}
                <button className='next-button' type='submit'>Ответить</button>
            </form>
        )
    }    
}

export default Answers;
