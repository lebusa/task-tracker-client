const Button = ({bgClr, name, onClick}) => {
    return <button 
      onClick={onClick} 
      className="btn" 
      style={{backgroundColor: bgClr}} 
    >
      {name}
    </button>
}

Button.defaultProps = {
    backgroundColor: "rgba(3, 105, 131, 0.774)",
    name: "Add",
}

export default Button
