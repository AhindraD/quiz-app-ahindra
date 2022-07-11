function Options(props) {
    return (
        <button className="options" style={{ backgroundColor: props.bgColor }} onClick={() => { props.handleClick(props.id, props.option.ifCorrect) }}>
            {props.option.text}
        </button>
    )
}

export default Options;