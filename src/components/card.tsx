import { FC } from "react"

import { ApiResponse } from "../types"

import styles from "./card.styles.module.css";

interface CardProps {
  apiInfo: ApiResponse,
  title: string
}

export const Card: FC<CardProps> = ({apiInfo, title}) => {
  const statusStyle = apiInfo.message.toLocaleLowerCase().includes('healthy') ? 
    styles.apiStatus : styles.negativeApiStatus

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={statusStyle}>{apiInfo.message}</p>
      <p className={styles.messageText}>{apiInfo.hostname}</p>
    </div>
  )
}
