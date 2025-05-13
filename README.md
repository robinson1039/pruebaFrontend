Prueba de Combinación Óptima de Elementos

Esta aplicación desarrollada con React permite agregar elementos con valores de peso y calorías, y calcula la mejor combinación que cumple un mínimo de calorías y un peso máximo permitidos. El objetivo es encontrar el conjunto óptimo que cumpla las restricciones y tenga el menor peso posible.

Requisitos Previos

Node.js (>= 14)

npm (>= 6)

Instalación

Clona el repositorio:

git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo

Instala las dependencias:

npm install

Inicia la aplicación:

npm start

La aplicación se abrirá automáticamente en http://localhost:3000.

Tecnologías Usadas

React

Tailwind CSS

React Router DOM

SweetAlert2 (opcional)

Estructura de Carpetas

src/
├── components/
│   ├── Home/
│   │   └── home.js
│   └── Tablas/
│       └── TablaDinamica.js
├── App.js
├── index.js
public/
├── index.html
├── favicon.png (o .ico)

Uso

Puedes ingresar el mínimo de calorías y peso máximo permitidos.

Agrega los elementos con sus respectivos valores de peso y calorías.

Haz clic en "Calcular Combinación".

Verás el resultado con la mejor combinación válida.

Personalización

Puedes modificar los estilos en tailwind.config.js o en los archivos JSX.

Para cambiar el favicon, reemplaza el archivo en public/favicon.png y edita public/index.html.

Autor

Robinson Higuita

Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente.
