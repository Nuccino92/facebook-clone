import "./FormError.css";

const FormError = ({ message, location }) => {
  return (
    <div
      className="FormError"
      style={
        location === "register"
          ? { marginTop: "30px" }
          : location === "ProfileIndex"
          ? {
              width: "200px",
              border: "none",
              backgroundColor: "white",
              fontWeight: 600,
              color: "red",
            }
          : null
      }
    >
      {message}
    </div>
  );
};

export default FormError;
