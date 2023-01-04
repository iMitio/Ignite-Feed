import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./styles.module.css"
import {Avatar} from "../Avatar"
import { useState } from "react"

interface CommentProps {
    content: string;
    onDeleteComment: (content: string) => void
}

export function Comment({content, onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={"https://avatars.githubusercontent.com/u/35750714?v=4"} alt="avatar"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jonatthan Mitio</strong>
                            <time
                                title="9 de Setembro de 2022" 
                                dateTime="2022-09-09 9:00:29">
                                    Cerca de 1h atrás
                            </time>
                        </div>

                        <button 
                            onClick={handleDeleteComment}
                            title="Deletar comentário"
                        >
                            <Trash size={24} />
                        </button>
                        
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

          
        </div>
    )
}