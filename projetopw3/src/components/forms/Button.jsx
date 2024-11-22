import React from 'react'
import styles from './Button.module.css'

const Button = ({rotulo}) => {
    return (
        <div className={styles.button}>
            <button>{rotulo}</button>
        </div>
    )
}

export default Button