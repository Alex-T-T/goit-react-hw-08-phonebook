
import { createPortal } from "react-dom";
import { IoIosCloseCircleOutline } from 'react-icons/io'
import css from "../Modal/Modal.module.css"

const loginRoot = document.querySelector('#login-root')

export const Modal = ({children, onClose}) => {
    
    return createPortal(
        <div className={css.Overlay}>
            <div className={css.Modal}>
                <button className={css.closeBtn} type="button" onClick={onClose}>
                    <IoIosCloseCircleOutline className={css.closeBtnIcon} /></button>
                {children}
            </div>
        </div>, loginRoot
    )
}