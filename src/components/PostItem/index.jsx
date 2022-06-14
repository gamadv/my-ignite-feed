import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './styles.module.css';

export function PostItem() {
    const profileImg = 'https://github.com/gamadv.png'
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={profileImg} />
                    <div className={styles.authorInfo}>
                        <strong> Moacir Gama </strong>
                        <span>Frontend Developer</span>
                    </div>
                </div>


                <time title="11 de março 08hrs" dateTime="2022-05-11 08:15:00"> Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a href="#">jane.design/doctorcare</a></p>

                <p>
                    <a href="#">#novoprojeto</a>
                    <a href="#">#nlw</a>
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong> Deixe Seu Feedback</strong>
                <textarea placeholder="Deixe seu comentário" />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}
