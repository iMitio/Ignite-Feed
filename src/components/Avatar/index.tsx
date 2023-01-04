import styles from "./styles.module.css"
import {ImgHTMLAttributes} from "react"


interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}
export function Avatar({ hasBorder =true, ...rest}: AvatarProps) {
    return (
        <img 
            {...rest}
            className={hasBorder? styles.avatarWithBorder : styles.avatar}

        />
    )
}
