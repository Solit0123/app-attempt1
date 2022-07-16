import styles from './alert.module.css';
import cn from 'classnames';


export default function Alert({children, type}) {
    return (
        <div className={
                cn({
                    /*stylyncclass  the attribute type and condition true */
                    [styles.sucess]: type === "success",
                    [styles.error]: type === "error",
                })
        }>
            {children}
        </div>
    )
}