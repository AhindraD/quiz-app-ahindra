import Options from "./Options";
import Question from "./Question";
import { useState, useEffect, useRef } from "react";
import QUESTIONS from "./QUESTIONS";
import Confetti from 'react-dom-confetti';
import Result from "./Result";
import {
    Link,
    Routes,
    Route,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";

// in render
// <Confetti active={this.props.completed} />


function Quiz(props) {
    let RESULT = [];
    const navigate = useNavigate();

    let [score, setScore] = useState(0);
    let [quesNo, setQuesNo] = useState(0);
    let [currentSelected, updateCurrentSelected] = useState(null);
    let [confettiActive, setConfettiActive] = useState(false);
    let [timerWidth, setTimerWidth] = useState(100);

    let intervalID = useRef();
    let timeOutID = useRef();
    useEffect(() => {
        console.log('rendered from useEffect');
        intervalID.current = setInterval(function () {
            setTimerWidth((width) => width - 2);//update instantly
        }, 100)

        timeOutID.current = setInterval(function () {
            setQuesNo(quesNo + 1);
        }, 5100)

        return () => {
            clearInterval(intervalID.current);
            clearTimeout(timeOutID.current);
            setTimerWidth(100);
        };
    }, [quesNo]);//question no depedency

    let updateBoard = (id, ifCorrect) => {
        //console.log(['id', id]);
        updateCurrentSelected(id);//update batch by batch
        clearInterval(intervalID.current);

        //for RESULT Table
        let currQues = QUESTIONS[quesNo].que;
        let currSelected = QUESTIONS[quesNo].opts[id].text;
        let currCorrect;
        for (let i = 0; i < QUESTIONS[quesNo].opts; i++) {
            let tempAns = QUESTIONS[quesNo].opts[i];
            if (tempAns.ifCorrect) {
                currCorrect = tempAns.text;
                break;
            }
        }
        RESULT.push([currQues, currSelected, currCorrect]);


        if (ifCorrect) {
            setScore(score + 1);
            setConfettiActive(true);
        }
        //updating Board to show next Question with Options
        setTimeout(function () {
            if (quesNo == QUESTIONS.length - 1) {
                navigate('/result');
            } else {
                setQuesNo(quesNo + 1)
                updateCurrentSelected(null);
                setConfettiActive(false);
            }
        }, 2500)
        //console.log(['currentSelected', currentSelected]);
    }

    return (
        <Routes>
            <Route path="/" element={
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
                        <Confetti active={confettiActive} />
                    </div>
                    <div style={{ width: `${timerWidth}vw`, backgroundColor: timerWidth < 75 ? timerWidth < 35 ? 'red' : 'orange' : null }} className="timer"></div>
                    <div className="timer-border"></div>
                </main >
            } />
            <Route path='/result' element={<Result result={RESULT} />} />
        </Routes>
    )
}

export default Quiz;