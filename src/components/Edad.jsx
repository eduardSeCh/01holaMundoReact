import propTypes from 'prop-types'

export const Edad = ({edad}) => {
    return(
        <>
            <p>Y tengo {edad} años</p>
        </>
    )
}

Edad.propTypes = {
    edad: propTypes.number.isRequired
}