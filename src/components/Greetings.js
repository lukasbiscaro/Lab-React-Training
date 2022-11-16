const Greetings = (props) => {
    const { lang, children } = props
    const checkLang = language => {
        if (language === 'de') return 'Hallo'
        if (language === 'en') return 'Hello'
        if (language === 'es') return 'Hola'
        if (language === 'fr') return 'Bonjour'
        else return 'Olá'
    }
    return (
        <div>
            <p>{checkLang(lang)} {children}</p>
        </div>
    )
}

export default Greetings