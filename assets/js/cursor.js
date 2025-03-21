const options = {
    strings: [
        "Ingeniero en Sistemas de Información",
        "Desarrollador Frontend",
        "Soporte de TI",
        "Desarrollador Backend",
        "Analista Power BI",            
    ],
    typeSpeed: 50, // Velocidad de escritura
    backSpeed: 30, // Velocidad de borrado
    loop: true, // Repetir infinitamente
    showCursor: true, // Mostrar cursor
    cursorChar: "|", // Carácter del cursor
    startDelay: 1000, // Retraso antes de empezar (1 segundo)
    backDelay: 1000 // Retraso antes de borrar (1 segundo)
};

const typed = new Typed('#animated-text', options);