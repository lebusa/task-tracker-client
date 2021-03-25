const Button = ({backgroundColor, name, onClick}) => {
    /* const onClick = (e) => {
        console.log(`clicked ${Date.now()}`)
    } */

    return <button 
      onClick={onClick} 
      className="btn" 
      style={{backgroundColor: backgroundColor}} >
        {name}
    </button>
}

export default Button
