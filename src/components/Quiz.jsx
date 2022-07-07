import Options from "./Options";
import Question from "./Question";
import { useState } from "react";


function Quiz(props) {
    let [score, setScore] = useState(0);
    let QUESTIONS = [
        {
            'No of sides in a Triangle?': {
                ONE: false,
                TWO: false,
                THREE: false,
                FOUR: false,
            }
        },
    ];
    return (
        <main className="container">
            <div className="quiz-body">
                <div className="score">
                    Score: {score}
                </div>
                <Question question={Object.keys(QUESTIONS)[0]} />
                <Options options={Object.values(QUESTIONS)[0]} />
            </div>
        </main>
    )
}

export default Quiz;