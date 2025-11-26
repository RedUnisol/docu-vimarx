import React from 'react'
import styles from "./stylesUI.module.css";
import { useColorMode } from '@docusaurus/theme-common'

interface TituloProps {
    children: React.ReactNode;
}

const Titulo: React.FC<TituloProps> = ({ children }) => {
    const { colorMode } = useColorMode()
    const isDark = colorMode === 'dark'

    return (
        <h1 className={`${styles.titulo} ${isDark ? styles.tituloDark : ''}`}>
            {children}
        </h1>
    )
}
export default Titulo;