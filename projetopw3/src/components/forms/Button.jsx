import styles from "./Button.module.css"

function Button({rotulo}){

    return(

        <div>
            <button type="submit">{rotulo}</button>
        </div>

    )
}

export default Button