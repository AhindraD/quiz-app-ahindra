import Options from "./Options";
import Question from "./Question";
import { useState } from "react";
import Confetti from 'react-dom-confetti';

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

    let [bgColor0, setBG0] = useState('#2f3a46');
    let [bgColor1, setBG1] = useState('#2f3a46');
    let [bgColor2, setBG2] = useState('#2f3a46');
    let [bgColor3, setBG3] = useState('#2f3a46');

    function setBack(color, id) {
        if (id === 0) {
            setBG0(color);
            setBG1('#2f3a46');
            setBG2('#2f3a46');
            setBG3('#2f3a46');
        }
        else if (id === 1) {
            setBG0('#2f3a46');
            setBG1(color);
            setBG2('#2f3a46');
            setBG3('#2f3a46');
        }
        else if (id === 2) {
            setBG0('#2f3a46');
            setBG1('#2f3a46');
            setBG2(color);
            setBG3('#2f3a46');
        }
        else if (id === 3) {
            setBG0('#2f3a46');
            setBG1('#2f3a46');
            setBG2('#2f3a46');
            setBG3(color);
        }
    }

    return (
        <main className="container">
            <div className="quiz-body">
                <div className="score">
                    Score: {score}
                </div>
                <Question question={QUESTIONS[0].que} />
                <div className="options-container">
                    <Options bgColor={bgColor0} id={0} options={QUESTIONS[0].opts} handleClick={setBack} />
                    <Options bgColor={bgColor1} id={1} options={QUESTIONS[0].opts} handleClick={setBack} />
                    <Options bgColor={bgColor2} id={2} options={QUESTIONS[0].opts} handleClick={setBack} />
                    <Options bgColor={bgColor3} id={3} options={QUESTIONS[0].opts} handleClick={setBack} />
                </div>
            </div>
        </main>
    )
}

export default Quiz;