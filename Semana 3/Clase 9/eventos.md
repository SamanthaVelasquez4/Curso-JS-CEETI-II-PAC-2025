# Eventos en JavaScript
Los eventos en JavaScript son acciones o sucesos que ocurren en una página web, generalmente desencadenados por el usuario o por el propio navegador. Estos eventos permiten que JavaScript reaccione a interacciones como clics, tecleos, movimientos del mouse, carga de páginas y más, haciendo posible crear páginas web dinámicas e interactivas.

#### Eventos del Mouse
1. click - Cuando se hace clic en un elemento
2. dblclick - Doble clic
3. mouseenter - El puntero entra en el elemento
4. mouseleave - El puntero sale del elemento
5. mousemove - El puntero se mueve sobre el elemento
6. mouseover - Similar a mouseenter pero se propaga a hijos
7. mouseout - Similar a mouseleave pero se propaga a hijos
8. mousedown - Botón del mouse presionado
9. mouseup - Botón del mouse liberado
10. contextmenu - Clic derecho (menú contextual)

#### Eventos del Teclado
11. keydown - Tecla presionada
12. keyup - Tecla liberada
13. keypress - Tecla presionada y liberada (obsoleto, usar keydown/keyup)

#### Eventos de Formularios
14. submit - Envío de formulario
15. change - Valor de input/select/textarea cambia
16. input - Valor de input/textarea cambia (en tiempo real)
17. focus - Elemento recibe foco
18. blur - Elemento pierde foco
19. select - Texto seleccionado en input/textarea
20. invalid - Validación fallida

#### Eventos de Ventana
21. load - Página y recursos cargados
22. DOMContentLoaded - DOM cargado (sin esperar recursos)
23. resize - Ventana redimensionada
24. scroll - Desplazamiento de página/elemento
25. beforeunload - Antes de abandonar la página
26. unload - Página siendo descargada

#### Eventos de Medios
27. play - Medio comienza a reproducirse
28. pause - Medio pausado
29. ended - Medio termina de reproducirse
30. volumechange - Volumen cambiado
31. timeupdate - Tiempo de reproducción actualizado

#### Eventos de Arrastre (Drag & Drop)
32. drag - Elemento siendo arrastrado
33. dragstart - Comienza arrastre
34. dragend - Termina arrastre
35. dragenter - Elemento arrastrado entra en objetivo
36. dragleave - Elemento arrastrado sale del objetivo
37. dragover - Elemento arrastrado sobre objetivo
38. drop - Elemento soltado en objetivo

#### Eventos de Clipboard
39. copy - Contenido copiado
40. cut - Contenido cortado
41. paste - Contenido pegado

#### Eventos de Toque (Touch)
42. touchstart - Toque iniciado
43. touchend - Toque finalizado
44. touchmove - Dedo moviéndose en pantalla
45. touchcancel - Toque interrumpido

### Eventos de Animación/Transición
46. animationstart - Animación CSS comienza
47. animationend - Animación CSS termina
48. animationiteration - Repetición de animación CSS
49. transitionstart - Transición CSS comienza
50. transitionend - Transición CSS termina
51. transitioncancel - Transición CSS cancelada

#### Eventos Modernos
52. visibilitychange - Cuando la pestaña gana/pierde visibilidad
53. online - Navegador obtiene conexión
54. offline - Navegador pierde conexión
55. gamepadconnected - Controlador de juegos conectado
56. gamepaddisconnected - Controlador de juegos desconectado

### Ejemplos
~~~
const boton = document.getElementById('miBoton');

// Evento click
boton.addEventListener('click', () => {
  console.log('Click!');
});

// Evento mouseenter
boton.addEventListener('mouseenter', () => {
  boton.style.backgroundColor = 'yellow';
});

// Evento mouseleave
boton.addEventListener('mouseleave', () => {
  boton.style.backgroundColor = '';
});

// Evento keydown en documento
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    console.log('Tecla Escape presionada');
  }
});
~~~


**Por si quieren leer un poco de Markdown [click aquí](https://markdown.es/sintaxis-markdown/)**