function Options(props) {
    let options = Object.values(props.options)[0]
    return (
        <div className="options">
            <button className="opt1" onClick={() => { }}>ONE</button>
            <button className="opt2" onClick={() => { }}>TWO</button>
            <button className="opt3" onClick={() => { }}>THREE</button>
            <button className="opt4" onClick={() => { }}>FOUR</button>
        </div>
    )
}

export default Options;