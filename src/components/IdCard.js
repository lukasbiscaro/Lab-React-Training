const IdCard = (props) => {
    const { lastName, firstName, gender, height, birth, picture } = props
    return (
        <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {Number(height)}m</p>
            <p>Birth: {birth.toLocaleDateString()}</p>
            <img src={picture} alt="" />
        </div>
    )
}

export default IdCard