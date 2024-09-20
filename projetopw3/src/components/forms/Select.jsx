import styles from '../forms/Select.module.css'

function Select({text, name}) {

    return(

        <div  className={styles.form_control}>
          
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Selecione uma categoria</option>
                <option>Ficção cientifíca</option>
                <option>Fantasia heroica</option>
                <option>Suspense</option>
                <option>Terror</option>
            </select>

        </div>
    )
}

export default Select