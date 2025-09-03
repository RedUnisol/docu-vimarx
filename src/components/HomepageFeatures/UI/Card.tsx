import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  title?: string;
  icon?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, icon, children }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>
        {icon && <span className={styles.icon}>{icon}</span>} {title}
      </h3>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
export default Card;
