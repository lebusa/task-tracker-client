import PropTypes from 'prop-types';

const Button = ({bgClr, name, onClick}) => {
    /* const onClick = (e) => {
        console.log(`clicked ${Date.now()}`)
    } */

    return <button 
      onClick={onClick} 
      className="btn" 
      style={{backgroundColor: bgClr}} >
        {name}
    </button>
}


Button.defaultProps = {
    backgroundColor: "rgba(3, 105, 131, 0.774)",
    name: "Button",
}

export default Button
