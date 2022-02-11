import "./FormError.css";

const FormError = ({ message, location }) => {
  return (
    <div
      className="FormError"
      style={location === "register" ? { marginTop: "30px" } : null}
    >
      {message}
    </div>
  );
};

export default FormError;
