import styles from "./Modal.module.css";

const Modal = (props) => {
  return <div className={styles.backdrop}>{props.children}</div>;
};

export default Modal;
