import styles from "./Input.module.css";

function Input({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
  error,
}) {
  return React.createElement("div", {
    className: styles.input_container
  }, React.createElement("label", {
    className: styles.input_label,
    htmlFor: name
  }, text), React.createElement("input", {
    className: styles.input,
    type: type,
    id: name,
    onChange: handleOnChange,
    value: value,
    name: name,
    placeholder: placeholder
  }), error && React.createElement("p", {
    className: styles.input_error
  }, error));
}

export default Input;
