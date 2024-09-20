import styles from '../forms/Button.module.css'

function Button({rotulo}){
    return(

        <div className={styles.form_control}>

            <button>{rotulo}</button>

        </div>

    )
}


export default Button