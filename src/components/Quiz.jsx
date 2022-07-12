import Options from "./Options";
import Question from "./Question";
import { useState } from "react";
import QUESTIONS from "./QUESTIONS";
//import Confetti from 'react-dom-confetti';

// in render
// <Confetti active={this.props.completed} />


function Quiz(props) {
    let [score, setScore] = useState(0);
    let [quesNo, setQuesNo] = useState(0);
    let [currentSelected, updateCurrentSelected] = useState(null);


    let updateBoard = (id, ifCorrect) => {
        //console.log(['id', id]);
        updateCurrentSelected(id);
        if (ifCorrect) {
            setScore(score + 1);
        }
        //updating Board to show next Question with Options
        setTimeout(function () {
            setQuesNo(quesNo + 1)
            updateCurrentSelected(null);
        }, 1000)
        //console.log(['currentSelected', currentSelected]);
    }

    return (
        <main className="container">
            <div className="quiz-body">
                <div className="score">
                    Score: {score}
                </div>
                <Question question={QUESTIONS[quesNo].que} />
                <div className="options-container">
                    <Options bgColor={currentSelected === 0 ? (QUESTIONS[quesNo].opts[0].ifCorrect ? 'green' : 'red') : null} id={0} option={QUESTIONS[quesNo].opts[0]} handleClick={updateBoard} />

                    <Options bgColor={currentSelected === 1 ? (QUESTIONS[quesNo].opts[1].ifCorrect ? 'green' : 'red') : null} id={1} option={QUESTIONS[quesNo].opts[1]} handleClick={updateBoard} />

                    <Options bgColor={currentSelected === 2 ? (QUESTIONS[quesNo].opts[2].ifCorrect ? 'green' : 'red') : null} id={2} option={QUESTIONS[quesNo].opts[2]} handleClick={updateBoard} />

                    <Options bgColor={currentSelected === 3 ? (QUESTIONS[quesNo].opts[3].ifCorrect ? 'green' : 'red') : null} id={3} option={QUESTIONS[quesNo].opts[3]} handleClick={updateBoard} />
                </div>
            </div>
        </main>
    )
}

export default Quiz;