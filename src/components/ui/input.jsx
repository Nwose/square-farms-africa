const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
    {...props}
  />
);
export default Input;
