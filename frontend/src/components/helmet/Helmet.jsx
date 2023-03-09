const helmet = (props) => {

  document.title = 'VeloPro Online Food Ordering & Delivery - ' + props.title
  
  return (
    <div className="w-100">{props.children}</div>
  )
}
export default helmet