import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar'

import styles from './styles.module.css'

export function Sidebar() {

    const imgUrl = 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40'
    const profileImgURL = 'https://github.com/gamadv.png'

    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={imgUrl} alt="User Background" />
            <div className={styles.profile}>
                <Avatar src={profileImgURL} alt="Sidebar Profile Image" />
                <strong> Moacir Gama </strong>
                <span>Frontend Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
