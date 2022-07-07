function Options(props) {
    let options = props.options;
    function color(id) {
        let boolean = options[id].ifCorrect;
        if (boolean) {
            return 'green';
        } else {
            return 'red';
        }
    }
    return (
        <button className="options" style={{ backgroundColor: props.bgColor }} onClick={() => { props.handleClick(color(props.id), props.id) }}>{options[props.id].text}</button>
    )
}

export default Options;