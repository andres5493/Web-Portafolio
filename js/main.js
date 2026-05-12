// ============================================
// main.js — logica del modo oscuro
// ============================================

// 1) Al cargar el script, revisar si hay un tema guardado en localStorage
const temaGuardado = localStorage.getItem('tema');

// Si el usuario eligio "oscuro" en una visita anterior, aplicarlo
if (temaGuardado === 'oscuro') {
    document.documentElement.classList.add('dark-mode');
}

// 2) Buscar el boton de cambio de tema en el DOM
const botonTema = document.querySelector('#toggle-tema');

// 3) Cuando el usuario hace click en el boton, alternar el modo
botonTema.addEventListener('click', () => {
    // Alternar la clase 'dark-mode' en el <html>
    const esOscuro = document.documentElement.classList.toggle('dark-mode');
    
    // Guardar la preferencia en localStorage
    localStorage.setItem('tema', esOscuro ? 'oscuro' : 'claro');
    
    // Actualizar el icono del boton (sol o luna)
    actualizarIconoBoton(esOscuro);
});
// 4) Funcion auxiliar: cambiar el icono del boton segun el modo
function actualizarIconoBoton(esOscuro) {
    const icono = botonTema.querySelector('i');
    
    if (esOscuro) {
        // Modo oscuro activo: mostrar icono de sol (para "volver a claro")
        icono.classList.remove('bi-moon');
        icono.classList.add('bi-sun');
    } else {
        // Modo claro activo: mostrar icono de luna (para "ir a oscuro")
        icono.classList.remove('bi-sun');
        icono.classList.add('bi-moon');
    }
}

// 5) Llamar a la funcion al cargar para que el icono coincida con el modo inicial
actualizarIconoBoton(document.documentElement.classList.contains('dark-mode'));

// ============================================
// Footer: actualizar el año automaticamente
// ============================================

const anioActual = document.querySelector('#anio-actual');
if (anioActual) {
    anioActual.textContent = new Date().getFullYear();
}

// ============================================
// Contact: copiar email al portapapeles
// ============================================

const botonCopiarEmail = document.querySelector('#copiar-email');

if (botonCopiarEmail) {
    botonCopiarEmail.addEventListener('click', async () => {
        const email = 'andresdr.pro@gmail.com';
        
        try {
            await navigator.clipboard.writeText(email);
            
            // Feedback visual: cambiar el texto del boton
            const textoSpan = botonCopiarEmail.querySelector('span');
            const textoOriginal = textoSpan.textContent;
            textoSpan.textContent = '¡Copiado!';
            
            // Volver al texto original despues de 2 segundos
            setTimeout(() => {
                textoSpan.textContent = textoOriginal;
            }, 2000);
            
        } catch (error) {
            console.error('No se pudo copiar el email:', error);
        }
    });
}