# Testing Front End AF 50500 – Grupo 103220

- Fecha inicio: 03/11/2026
- Fecha fin: 06/11/2026
- Días 03, 04, 05 y 06 Noviembre 2026
- Horario: 9:00 - 14:00
- Duración: 20 horas 4 sesiones de 5 horas

Formador: Alejandro Cerezo Lasne
<alce65@hotmail.es>

Repositorio del curso: [GitHub - Testing Frontend](https://github.com/IconoTC/Testing-Front-End-AF-50500-Grupo-103220)

Temario

- Introducción
- Pruebas de Unidad e Integración en JavaScript
- Pruebas de Aceptación
- Testing Library
- Pruebas de Accesibilidad
- Integración DevOps

Proxy info

Si estás detrás de un proxy, configura npm con los siguientes comandos:

```shell
npm config set proxy http://username:password@host:port
npm config set https-proxy http://username:password@host:port
```

El resultado se almacena en el fichero user/.npmrc

## Desarrollo del curso

### Día 1. Martes 03/11/2026

- Presentación del curso, el formador y los alumnos.
- Introducción a las pruebas de software.
- Configuración del entorno de desarrollo con Vitest.
  - Node. nvm. VSCode
  - Monorepo con npm
  - Proyecto con Vite - TS - React (sin Vitest - Testing Library)
  - Proyecto con TS y Vitest

- Elementos de los tests unitarios
  - Estructura de los tests. Suites. Teardown o Setup.
  - Primer tests con Vitest
  - Primer test conn Node.js
  - Patrones: Given, When, Then (Gherkin). Arrange, Act, Assert.
  - Coverage de tests unitarios con Vitest-v8

- [Descanso] - 11:40 a 12:10


- Elementos de los tests unitarios
  - Primeros tests unitarios con Vitest
    - Matches
    - Matches de errores

- Taller de TDD: Factorial
  - Desarrollo del proceso TDD
  - Refactorización: Automatizando casos de uso
  - Casos de uso extremos (corner cases) y casos de uso límite (boundary cases)
  - Extracción de funciones auxiliares
  
- Asincronía en JS: callbacks y promesas


### Día 2. Miércoles 04/11/2026

- Test de Funciones
  - Asincronía
    - Mocks y Spies
    - Caso real: getUsers con fetch y axios (creado sin tests)
    - Testando getUsers con fetch y axios
    - Spies en Vitest: console.log, video.play

- Tests de Clases
  - Interfaces. Configuración del coverage

- [Descanso] : 11:30 a 12:00

- Tests de Clases
  - Capa repositorio

<!-- 
  - Capa servicio estado
-->

- Tests de Componentes con Testing Library
- Actualización del proyecto con Vite-TS-React:  Vitest & Testing Library
- Conceptos básicos de Testing Library
  - Renderizado de componentes
  - screen (debug) y queries
  - Búsqueda de elementos
  - Simulación de eventos
- Actualización de la configuración de testing 

### Día 3. Jueves 05/11/2026

- Primeros tests de componentes a partir de la App ejemplo
  - Footer: render element
  - Header: props
  - Counter: events
  - Card: children
  - Menu: props 
  - App: solo render

- [Descanso] : 11:30 a 12:00


- Nuevo proyecto
  - react-router

- Tests de Componentes con rutas
  - Configuración de rutas con React Router
  - Testando rutas sin carga diferida (lazy)
  - Componente Menú usando Link. Test del menú


- Formularios y validaciones
  - Testando formularios controlados
  - (Es igual testando formularios no controlados)

### Día 4. Viernes 06/11/2026


- Formularios y validaciones

- Gestión de asincronía en tests
  - Testar un servicio que usa fetch -> mock 

<!-- 
  - Testando rutas con carga diferida (lazy)
-->

- Context API
  - Introducción a la Context API de React
  - Testando componentes que consumen contextos 

<!--
Posibles ampliaciones futuras:

- Custom hooks
  - Introducción a los custom hooks
  - Testando custom hooks desde el componente
-->

- [Descanso] 11:30 a 12:00

- Pruebas e2e y de Accesibilidad con Playwright

  - Introducción a Playwright
  - Instalación. Browsers
  - Ejemplos de tests e2e
  - Comandos disponibles
    - CLI
    - Report
    - UI

- Tests e2e con Playwright (continuación)

  - Localizadores y aserciones
  - Navegación por rutas
  - Interacción con formularios
  - Credenciales y autenticación
  - Tests de APIs

- Testando accesibilidad con Playwright
  - Navegación por teclado
  - Validación de roles ARIA
  - Captura y comparación de snapshots de accesibilidad
  - Extensión axe-core en Playwright

