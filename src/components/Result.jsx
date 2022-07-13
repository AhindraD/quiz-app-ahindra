function Result(props) {
    let resultArr = props.result.slice();
    //console.log(resultArr);
    return (
        <div className="result-container">
            <table className="result">
                <thead>
                    <tr>
                        <th>QUESTION</th>
                        <th>ANSWER</th>
                        <th>Correct Option</th>
                    </tr>
                </thead>
                <tbody>
                    {resultArr.map((elem, index) => {
                        return (
                            <tr key={index}>
                                <td className="q">{elem.que}</td>
                                <td className="a" style={{ backgroundColor: elem.got ? 'green' : 'red' }}>{elem.select}</td>
                                <td className="c">{elem.correct}</td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th>SCORE :</th>
                        <th colSpan={2}>{props.score}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Result;