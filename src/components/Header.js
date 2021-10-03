// this is the same object Header.propTypes, this makes it work in the header
import PropTypes from 'prop-types'

// importing the button
import Button from './Button'

// that title argument is object destructuring in ES6
const Header = ({ title, onAdd, showAdd }) => {

    // onClick function
    // const onClick = () => {
    //     console.log('Click');
    // };

    return (
        // the className of header is added to follow the classes in style.css
        <header className = 'header'>
            <h1>{title}</h1>
            <Button 
                color={showAdd ? 'red' : 'green'} 
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd} />
                {/* in this button dependind on the value of showAddTask(true/false) the bottun will show some text and color or another */}
            {/* this is the button imported */}
            {/* we are adding some propetis to get its own style */}

            {/* we got this element into its own component to get it later */}
            {/* <button className='btn'>Add</button> */}

            {/* <h1 style= {{color: 'red', backgroundColor: 'black'}}>{title}</h1> */}
            {/* above its how you inline style css in components  with double curly braces  */}

            {/* <h1 style= {headingStyle}>{title}</h1> */}
            {/* above it is how you inline style with a external variable to add css just declare an objet and pass it with curly braces */}
        </header>
    )
}

// Here we can set deafult props in case we dont pass any value to the function it gets those values
Header.defaultProps = {
    title: 'Task Tracker'
}

// this is to protect the property passed, this way only string can be passed as a title
Header.propTypes = {
    title: PropTypes.string.isRequired
}
// here is the css styling object 
// const headingStyle = {
//     color: 'blue',
//     backgroundColor: 'teal'
// }

export default Header
