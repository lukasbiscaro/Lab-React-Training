const Random = (props) => {
    const { min, max } = props
    const randomNumber = Math.floor(Math.random() * min)
    return (
        <p>Random value between {min} and {max} is {randomNumber}</p>
    )
}

export default Random