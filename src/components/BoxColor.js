const BoxColor = (props) => {
    const { r, g, b } = props
    const boxColorStyle = {
        height: '100px',
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue' // render test
    }
    return (
        <div style={boxColorStyle}>
            <p>test</p>
        </div>
    )
}

export default BoxColor