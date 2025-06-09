const Button = ({ className = "", children, ...props }) => (
  <button
    className={`rounded-lg font-semibold text-white transition ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
