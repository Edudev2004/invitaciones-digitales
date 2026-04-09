/* Configuración personalizada de Tailwind CSS */
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            /* Definición de colores de la temática infantil */
            colors: {
                "nursery-pink": "#FADADD",
                "nursery-cream": "#FEFCF4",
                "nursery-mint": "#E0FFFF",
                "nursery-gold": "#FFD700",
                "primary": "#765e61",
                "on-primary": "#ffffff",
                "primary-container": "#f8d8db",
                "on-primary-container": "#614a4d",
                "secondary": "#4d696a",
                "secondary-container": "#cae8e8",
                "on-secondary-container": "#3b5757",
                "surface": "#fefcf4",
                "on-surface": "#383833",
                "on-surface-variant": "#65655f"
            },
            /* Fuentes tipográficas: Pangolin para títulos y Vietnam para textos */
            fontFamily: {
                "headline": ["Pangolin", "cursive"],
                "body": ["Be Vietnam Pro", "sans-serif"]
            },
            /* Bordes redondeados más suaves */
            borderRadius: {
                "xl": "2rem",
                "2xl": "3rem",
                "full": "9999px"
            }
        }
    }
}
