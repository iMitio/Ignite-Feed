import {ChangeEvent, FormEvent, InvalidEvent, useState} from  "react"

import { Avatar } from "../Avatar"
import { Comment } from "../Comment"
import styles from "./styles.module.css"

import {format, formatDistanceToNow} from "date-fns"
import ptBR from "date-fns/locale/pt-BR"



interface Author {
    avatarURL: string;
    name: string;
    role: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string

}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[]
}

export function Post ({author, publishedAt, content}: PostProps){
    const [comments, setComments] = useState([
        "Post muito bacana hein?!"
    ])

    const [newCommentText, setNewCommentText] = useState("")


    const publishedAtdateFormmated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    
   
    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()
        
        setComments([...comments, newCommentText])
        setNewCommentText("")

    }
    
    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete: string) {
        const commentWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentWithoutDeletedOne)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("Esse campo é obrigatorio!") 
        
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                     <Avatar src={author.avatarURL}/>

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time
                    title={publishedAtdateFormmated}
                    dateTime={publishedAt.toISOString()}>
                        {publishedDateRelativeToNow}
                </time>
 
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === "paragraph"){
                        return <p key={line.content}>{line.content}</p>;
                    }else if (line.type === "link") {
                        return( 
                        <p key={line.content}>
                            <a href="#">{line.content}</a>
                        </p>
                    )
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe um feedback</strong>
                <textarea 
                    value={newCommentText}
                    placeholder="Deixe um comentário" 
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required        
                />

              <footer>
                <button 
                    type="submit"
                    disabled={isNewCommentEmpty}
                >
                        Publicar
                    </button>
              </footer>
            </form>


            <div className={styles.commentList}>
               {comments.map(comment => {
                return (
                    <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment}
                    />
                )
               })}
            </div>
        </article>
    )
}