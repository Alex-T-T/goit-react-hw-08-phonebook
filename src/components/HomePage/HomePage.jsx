import yellowPages from '../../img/yellow-pages.png';
import { ImArrowUp } from 'react-icons/im';
import css from '../HomePage/HomePage.module.css';

export const HomePage = () => {

    return (
        <div className={css.homePageContainer}>
            <img src={yellowPages} alt="yellow pages" />
            <div>
                <p className={css.text}>Your Yellow Pages starts here <a className={ css.link} href='/goit-react-hw-08-phonebook/login'><ImArrowUp className={css.arrowUp}/></a></p>
            </div>
        </div>
    )
}