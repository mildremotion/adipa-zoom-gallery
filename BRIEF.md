Brief: Repositorio y Gestor de Fondos de Zoom para Campañas ADIPA
Problema que resuelve
Las áreas internas de ADIPA (Marketing, Comunicaciones y Producto Académico) necesitan proyectar una imagen corporativa unificada y estandarizada en sus reuniones virtuales, clases sincrónicas y webinars. Actualmente, los fondos de Zoom de las distintas campañas se distribuyen de manera descentralizada a través de chats o correos electrónicos, lo que genera el uso de logotipos desactualizados y una notable pérdida de consistencia visual.

Principal usuario y roles
Equipos Internos y Docentes (Marketing, Comunicaciones y Operaciones Académicas): Usuarios que acceden a la plataforma para explorar, filtrar y descargar de forma autónoma los fondos oficiales de Zoom según la campaña vigente.

Diseñadora / Administradora (Tú): Responsable de la curaduría visual, encargada de subir nuevos diseños, actualizar las categorías de campaña y garantizar la coherencia de la identidad gráfica de ADIPA.

Operaciones T.I.: Equipo técnico de soporte que vela por la estabilidad, rendimiento y disponibilidad general de la aplicación web.

Pantallas / piezas (en orden del Journey)
Galería de Fondos (Dashboard Principal): Vista de interfaz en cuadrícula con tarjetas visuales de los fondos disponibles, estructurados mediante filtros interactivos según las campañas clave de ADIPA: Institucional, Fiestas Patrias, Amor y Amistad, Cyber Day y Black Friday.

Vista de Detalle / Previsualización: Pantalla flotante o ampliada del fondo seleccionado que muestra los metadatos de la campaña y un botón destacado de descarga directa en alta resolución (1920x1080px).

Panel de Administración / Subida: Formulario intuitivo destinado a la diseñadora para la carga de nuevos recursos gráficos, indicando título y categoría de campaña correspondiente.

Datos por pantalla (qué entra, qué sale)
Galería de Fondos:

Entra: Listado dinámico de recursos gráficos y metadatos de categorías desde el estado de la aplicación.

Sale: Visualización de tarjetas filtradas en tiempo real según la selección del usuario.

Vista de Detalle:

Entra: Información detallada del recurso seleccionado y el archivo gráfico optimizado.

Sale: Descarga directa del archivo de imagen en formato horizontal listo para su uso inmediato en Zoom.

Panel de Subida:

Entra: Archivo multimedia, título descriptivo y asignación de categoría (Institucional, Fiestas Patrias, Amor y Amistad, Cyber Day, Black Friday).

Sale: Integración y despliegue inmediato de una nueva tarjeta en la galería pública.

Reglas de negocio (Lógica condicional)
Si el usuario selecciona una categoría en el filtro de campañas, entonces la galería actualiza de forma inmediata la vista mostrando exclusivamente los recursos asociados a esa temática.

Si la administradora intenta subir un recurso gráfico sin adjuntar un archivo de imagen válido, entonces el sistema bloquea el registro y despliega un aviso de validación de error.

Si el usuario hace clic en el botón de descarga sobre un recurso, entonces se ejecuta la descarga del archivo gráfico en alta calidad optimizado para su relación de aspecto en videollamadas.

Fuera de alcance (Qué NO se construye en esta versión)
Editor gráfico integrado en el cliente: No se incluirá una herramienta de personalización de nombres o textos sobre el fondo en tiempo real; los archivos se distribuyen estáticos y listados para su uso directo tal como los concibe el área de diseño.

Sistema de autenticación por perfiles y contraseñas: No existirá un backend de usuarios con roles diferenciados en esta etapa; el panel administrativo estará simulado mediante una interfaz de acceso directo orientada a demostración.

Almacenamiento masivo propio en la nube: Los archivos gráficos se gestionarán mediante recursos estáticos optimizados y almacenamiento local de pruebas, garantizando un despliegue ágil y fluido en Vercel.

Retrospectiva
¿Qué pregunta de Claude te hizo dar cuenta de algo que no tenías claro del flujo?

La consulta orientada a definir si las campañas debían estructurarse como un conjunto estático o como entidades dinámicas me hizo comprender que el verdadero desafío no era solo exhibir un número fijo de imágenes, sino diseñar un repositorio escalable capaz de incorporar nuevas iniciativas comerciales sin alterar la arquitectura de los filtros ni del panel administrativo.

¿Qué diferencia hubo entre tu mapa inicial y lo que terminaste construyendo?

El planteamiento inicial era lineal y dependiente de categorías rígidas. Durante el desarrollo iterativo con la herramienta, la estructura evolucionó hacia un modelo modular donde las campañas actúan como entidades dinámicas que alimentan la interfaz de forma automatizada, logrando un producto con un estándar de robustez mucho más profesional y realista.

Si tuvieras que hacer este flujo de verdad para ADIPA, ¿cuál sería el primer riesgo o pieza faltante?

El principal riesgo radica en la gobernanza del contenido y la consistencia visual a gran escala: sin un protocolo estricto de nomenclatura, calidad y resolución para las piezas gráficas, el repositorio puede saturarse o perder orden. Como pieza faltante prioritaria se requeriría un sistema de almacenamiento cloud persistente (ej. AWS S3 o Cloudinary) acompañado de una capa de autenticación con roles de seguridad reales.
