import Options from "./Options";
import Question from "./Question";
import { useState } from "react";

let [score, setScore] = useState(0);

function Quiz(props) {
    return (
        <div className="quiz-body">
            <div className="score">
                {score}
            </div>
            <Question />
            <Options />
        </div>
    )
}

export default Quiz;