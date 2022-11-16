const CreditCard = (props) => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    const showFinalNumbers = `**** **** **** ${number[12]}${number[13]}${number[14]}${number[15]}`
    const cutYear = expirationYear.toString().slice(2)
    const divStyle = {
        backgroundColor: bgColor,
        color: color
    }
    return (
        <div style={divStyle}>
            <h1>{type}</h1>
            <p>{showFinalNumbers}</p>
            <p>Expires {expirationMonth}/{cutYear} <span>{bank}</span></p>
            <p>{owner}</p>
        </div>
    )

}

export default CreditCard