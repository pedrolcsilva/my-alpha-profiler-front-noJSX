import { useState, useEffect } from "react";
import styles from "./Message.module.css";

function Message({ message, type }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return React.createElement(React.Fragment, null, visible && React.createElement("p", {
    className: styles["message_" + type]
  }, message));
}

export default Message;
