import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {

    // onClick function
    // const onClick = () => {
    //     console.log('click');
    // }

    return (
        // so with this component we can can pass it whatever inner text and style we like and get different buttons from it
        <button onClick={onClick} className='btn' style={{backgroundColor: color}}>{text}</button>
    )
}

// setting some default properties for our button component
Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button
