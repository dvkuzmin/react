import React from "react";
import Question from './Question';
import Answers from './Answers';


export default function QuestionUnit(props) {
    return (
        <div>
        <Question question={props.question} />
        <Answers question={props.question} onHandleNext={props.onHandleNext}/>;
        </div>
    )
}
