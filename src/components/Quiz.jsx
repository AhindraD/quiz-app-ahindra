import Options from "./Options";
import Question from "./Question";
import { useState } from "react";
//import Confetti from 'react-dom-confetti';

// in render
// <Confetti active={this.props.completed} />


function Quiz(props) {
    let [score, setScore] = useState(0);
    let QUESTIONS = [
        {
            que: 'No of sides in a Triangle?',
            opts: [
                { text: 'ONE', ifCorrect: false, },
                { text: 'TWO', ifCorrect: false, },
                { text: 'THREE', ifCorrect: true, },
                { text: 'FOUR', ifCorrect: false, },
            ]
        },
    ];

    let [currentSelected, updateCurrentSelected] = useState(4);

    let updateSelected = (id) => {
        //console.log(['id', id]);
        updateCurrentSelected(id);
        //console.log(['currentSelected', currentSelected]);
    }

    return (
        <main className="container">
            <div className="quiz-body">
                <div className="score">
                    Score: {score}
                </div>
                <Question question={QUESTIONS[0].que} />
                <div className="options-container">
                    <Options bgColor={currentSelected === 0 ? (QUESTIONS[0].opts[0].ifCorrect ? 'green' : 'red') : null} id={0} option={QUESTIONS[0].opts[0]} handleClick={updateSelected} />

                    <Options bgColor={currentSelected === 1 ? (QUESTIONS[0].opts[1].ifCorrect ? 'green' : 'red') : null} id={1} option={QUESTIONS[0].opts[1]} handleClick={updateSelected} />

                    <Options bgColor={currentSelected === 2 ? (QUESTIONS[0].opts[2].ifCorrect ? 'green' : 'red') : null} id={2} option={QUESTIONS[0].opts[2]} handleClick={updateSelected} />

                    <Options bgColor={currentSelected === 3 ? (QUESTIONS[0].opts[3].ifCorrect ? 'green' : 'red') : null} id={3} option={QUESTIONS[0].opts[3]} handleClick={updateSelected} />
                </div>
            </div>
        </main>
    )
}

export default Quiz;