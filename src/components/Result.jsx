function Result(props) {
    let resultArr=props.result;
    return (
        <table className="result">
            {resultArr.map((elem)=>{
                return <tr>
                    <td className="q">{elem[0]}</td>
                    <td className="a">{elem[1]}</td>
                    <td className="c">{elem[2]}</td>
                </tr>
            })}
        </table>
    )
}

export default Result;