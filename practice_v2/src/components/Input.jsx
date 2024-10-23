import styles from './Input.module.css'
const Input = (props) =>{
  return <input type="text" placeholder='Enter Name here' onKeyDown={props.handleonKeyDown} className={styles.input}/>;
}
export default Input