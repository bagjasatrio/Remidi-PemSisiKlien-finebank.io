

const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, variant, type } = props;
return (
  <button
  className={`h-12 rounded-md text-sm ${variant}`}
      type={type}
>
  {children}
</button>
)
}

export default Button