const Rating = (props) => {
    const { children } = props
    const ratingCalculate = Math.round(children);

    return (
        <h1>{"★".repeat(ratingCalculate) + "☆".repeat(5 - ratingCalculate)}</h1>
    )
}


export default Rating