import style from './styles.module.css'

import igniteLogo from '../../assets/ignite-logo.svg'

export function Header() {

    return (
        <header className={style.header}>
            <img src={igniteLogo} alt="Ignite Logo" height="60px" />
            <h1>My Ignite Feed</h1>
        </header>
    )
}
