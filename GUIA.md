# Guía Completa del Proyecto IFTS N°26

## 📚 Índice

1. [Introducción](#introducción)
2. [Arquitectura General](#arquitectura-general)
3. [Estructura de Carpetas](#estructura-de-carpetas)
4. [Conceptos Clave de Angular](#conceptos-clave-de-angular)
5. [Conceptos Clave de TypeScript](#conceptos-clave-de-typescript)
6. [Ejemplos de Código Explicados](#ejemplos-de-código-explicados)
7. [Cómo Agregar una Nueva Página](#cómo-agregar-una-nueva-página)
8. [Cómo Modificar Estilos](#cómo-modificar-estilos)
9. [Troubleshooting Común](#troubleshooting-común)

---

## Introducción

Este es el sitio web institucional del **IFTS N°26** (Instituto de Formación Técnica Superior), desarrollado con **Angular 20** y **TypeScript**. El objetivo de este documento es ayudarte a entender cómo funciona el proyecto, incluso si eres principiante en Angular o TypeScript.

### ¿Qué vas a encontrar aquí?

- Explicaciones detalladas de la arquitectura
- Ejemplos de código comentados línea por línea
- Guías paso a paso para realizar cambios comunes
- Soluciones a problemas frecuentes

---

## Arquitectura General

### ¿Qué es Angular?

Angular es un **framework de JavaScript** (específicamente TypeScript) para crear aplicaciones web modernas. Piensa en Angular como una caja de herramientas completa que te proporciona:

- **Componentes**: Bloques reutilizables de código (como piezas de LEGO)
- **Routing**: Sistema de navegación entre páginas
- **Data Binding**: Conexión automática entre el código TypeScript y el HTML
- **Servicios**: Código compartido entre componentes

### Arquitectura Standalone (Sin Módulos)

Este proyecto utiliza la **arquitectura standalone** de Angular, que es la forma moderna de trabajar. En lugar de tener módulos (NgModules) que agrupan componentes, cada componente es independiente y declara sus propias dependencias.

**Ventajas:**
- Código más simple y fácil de entender
- Menos archivos de configuración
- Mejor rendimiento (lazy loading automático)
- Más fácil de mantener

### Flujo de Ejecución

```
1. Navegador carga index.html
   ↓
2. Angular ejecuta main.ts
   ↓
3. main.ts carga App (componente raíz) con su configuración (app.config.ts)
   ↓
4. App renderiza Header, RouterOutlet y Footer
   ↓
5. RouterOutlet muestra el componente según la URL (definido en app.routes.ts)
   ↓
6. Usuario navega → Angular cambia componente sin recargar página (SPA)
```

---

## Estructura de Carpetas

```
IFTS26/
├── src/                          # Código fuente de la aplicación
│   ├── index.html                # HTML principal (punto de entrada del navegador)
│   ├── main.ts                   # Punto de entrada de Angular (bootstrapping)
│   ├── styles.scss               # Estilos globales compartidos por toda la app
│   │
│   ├── app/                      # Aplicación Angular
│   │   ├── app.ts                # Componente raíz (contiene Header, Footer, RouterOutlet)
│   │   ├── app.html              # Template del componente raíz
│   │   ├── app.scss              # Estilos del componente raíz
│   │   ├── app.config.ts         # Configuración de providers (HTTP, Router, etc.)
│   │   ├── app.routes.ts         # Definición de todas las rutas del sitio
│   │   │
│   │   ├── components/           # Componentes reutilizables
│   │   │   ├── header/           # Barra de navegación superior
│   │   │   ├── footer/           # Pie de página
│   │   │   ├── info-cards/       # Tarjetas informativas de la home
│   │   │   ├── page-banner/      # Banner reutilizable para páginas internas
│   │   │   └── course/           # Tarjeta de curso individual
│   │   │
│   │   └── pages/                # Páginas completas del sitio
│   │       ├── home/             # Página de inicio
│   │       ├── not-found/        # Página 404
│   │       └── navegacion/       # Páginas de navegación agrupadas
│   │           ├── alumnos/      # Sección para alumnos
│   │           │   ├── horarios/
│   │           │   ├── mesas-examen/
│   │           │   ├── becas/
│   │           │   └── ...
│   │           ├── carreras/     # Información de carreras
│   │           │   ├── gir/      # Gestión Integral del Riesgo
│   │           │   │   ├── gir.ts
│   │           │   │   ├── horarios/
│   │           │   │   └── perfil-egresado/
│   │           │   └── hys/      # Higiene y Seguridad
│   │           ├── institucional/ # Información del instituto
│   │           ├── contacto/     # Formulario de contacto
│   │           └── ...
│   │
│   └── assets/                   # Archivos estáticos
│       ├── data/                 # Archivos JSON con contenido
│       │   ├── docentes.json
│       │   ├── autoridades.json
│       │   └── ...
│       └── images/               # Imágenes del sitio
│
├── public/                       # Archivos públicos (se copian tal cual al build)
│   └── assets/
│       └── img/                  # Logos, imágenes públicas
│
├── angular.json                  # Configuración del proyecto Angular
├── package.json                  # Dependencias y scripts npm
├── tsconfig.json                 # Configuración de TypeScript
└── README.md                     # Documentación del proyecto
```

### Conceptos de Organización

**¿Por qué separar components y pages?**
- `components/`: Elementos reutilizables que se usan en varias páginas (header, footer, tarjetas)
- `pages/`: Páginas completas que representan rutas específicas del sitio

**¿Por qué usar navegacion/?**
- Agrupa páginas relacionadas que forman parte del menú de navegación
- Mantiene el código organizado por áreas temáticas
- Facilita encontrar archivos cuando el proyecto crece

---

## Conceptos Clave de Angular

### 1. Componentes

Un **componente** es una pieza reutilizable de la interfaz que tiene:
- **Template (HTML)**: La estructura visual
- **Estilos (CSS/SCSS)**: La apariencia
- **Lógica (TypeScript)**: El comportamiento y los datos

**Ejemplo: Header Component**

```typescript
// header.ts - La lógica del componente
@Component({
  selector: 'app-header',           // Cómo se usa: <app-header></app-header>
  standalone: true,                 // Es standalone (no necesita módulo)
  imports: [CommonModule, RouterLink], // Qué otros componentes/directivas usa
  templateUrl: './header.html',     // Archivo con el HTML
  styleUrls: ['./header.scss']      // Archivo con los estilos
})
export class Header {
  mobileMenuOpen = false;           // Variable para controlar el menú mobile
  
  toggleMobileMenu(): void {        // Método para abrir/cerrar el menú
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
```

### 2. Data Binding

**Data Binding** es la conexión entre el TypeScript y el HTML.

#### Interpolación `{{ }}`
Muestra el valor de una variable en el HTML:

```typescript
// TypeScript
title = 'IFTS26';
```

```html
<!-- HTML -->
<h1>{{ title }}</h1>
<!-- Resultado: <h1>IFTS26</h1> -->
```

#### Property Binding `[propiedad]`
Asigna un valor dinámico a una propiedad HTML:

```typescript
// TypeScript
isMenuOpen = true;
imageUrl = '/assets/logo.png';
```

```html
<!-- HTML -->
<div [hidden]="!isMenuOpen">Menú visible</div>
<img [src]="imageUrl" />
```

#### Event Binding `(evento)`
Ejecuta código cuando ocurre un evento:

```typescript
// TypeScript
contador = 0;

incrementar(): void {
  this.contador++;
}
```

```html
<!-- HTML -->
<button (click)="incrementar()">Incrementar</button>
<p>Contador: {{ contador }}</p>
```

#### Two-way Binding `[(ngModel)]`
Sincronización bidireccional (usado en formularios):

```typescript
// TypeScript
nombre = '';
```

```html
<!-- HTML -->
<input [(ngModel)]="nombre" />
<p>Hola {{ nombre }}</p>
<!-- Lo que escribas en el input se actualiza automáticamente en el <p> -->
```

### 3. Directivas

Las **directivas** son instrucciones especiales en el HTML.

#### *ngIf (ahora @if)
Muestra u oculta elementos condicionalmente:

```html
<!-- Sintaxis antigua -->
<div *ngIf="isLoggedIn">Bienvenido usuario</div>

<!-- Sintaxis nueva (Angular 17+) -->
@if (isLoggedIn) {
  <div>Bienvenido usuario</div>
}
```

#### *ngFor (ahora @for)
Repite elementos para cada item de una lista:

```typescript
// TypeScript
carreras = ['GIR', 'HyS', 'Enfermería'];
```

```html
<!-- Sintaxis antigua -->
<ul>
  <li *ngFor="let carrera of carreras">{{ carrera }}</li>
</ul>

<!-- Sintaxis nueva (Angular 17+) -->
<ul>
  @for (carrera of carreras; track carrera) {
    <li>{{ carrera }}</li>
  }
</ul>
<!-- Resultado:
  <li>GIR</li>
  <li>HyS</li>
  <li>Enfermería</li>
-->
```

### 4. Routing (Navegación)

El **Router** maneja la navegación entre páginas sin recargar el navegador.

**Configuración de rutas (app.routes.ts):**

```typescript
export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },  // Ruta vacía → /inicio
  { path: 'inicio', component: Home },                     // /inicio → Componente Home
  { path: 'contacto', component: Contacto },               // /contacto → Componente Contacto
  { path: 'carrera/gir', component: Gir },                 // /carrera/gir → Componente Gir
  { path: '**', redirectTo: '/not-found' }                 // Cualquier otra → 404
];
```

**Navegación en HTML:**

```html
<!-- Usando RouterLink (recomendado) -->
<a [routerLink]="['/contacto']">Contacto</a>
<a [routerLink]="['/carrera/gir']">Ver GIR</a>

<!-- RouterOutlet: donde se renderizan los componentes -->
<router-outlet></router-outlet>
```

**Navegación programática (en TypeScript):**

```typescript
import { Router } from '@angular/router';

constructor(private router: Router) {}

irAContacto(): void {
  this.router.navigate(['/contacto']);
}
```

### 5. Servicios

Los **servicios** son clases que contienen lógica compartida entre componentes (ej: llamadas HTTP, manejo de datos).

En este proyecto no usamos servicios complejos porque los datos vienen de archivos JSON estáticos, pero aquí un ejemplo conceptual:

```typescript
// alumno.service.ts
@Injectable({
  providedIn: 'root'  // Disponible en toda la app
})
export class AlumnoService {
  private http = inject(HttpClient);
  
  obtenerHorarios() {
    return this.http.get('/api/horarios');
  }
}

// Uso en un componente
export class Horarios {
  private alumnoService = inject(AlumnoService);
  
  ngOnInit() {
    this.alumnoService.obtenerHorarios().subscribe(horarios => {
      console.log(horarios);
    });
  }
}
```

---

## Conceptos Clave de TypeScript

### 1. Tipos de Datos

TypeScript añade **tipos** a JavaScript para evitar errores:

```typescript
// Tipos básicos
let nombre: string = 'Juan';
let edad: number = 25;
let esEstudiante: boolean = true;
let materias: string[] = ['Matemática', 'Historia'];

// Inferencia de tipos (TypeScript detecta el tipo automáticamente)
let apellido = 'Pérez';  // TypeScript sabe que es string
```

### 2. Interfaces

Las **interfaces** definen la estructura de un objeto:

```typescript
// Definición de interfaz
interface Materia {
  nombre: string;
  dia: string;
  horario: string;
  aula?: string;  // El ? significa opcional
}

// Uso de la interfaz
const matematica: Materia = {
  nombre: 'Matemática Aplicada',
  dia: 'Lunes',
  horario: '18:00 - 20:00',
  aula: '201'
};

// Esto daría error porque falta 'dia':
// const fisica: Materia = {
//   nombre: 'Física',
//   horario: '20:00 - 22:00'
// };
```

### 3. Funciones y Métodos

```typescript
// Función con tipo de retorno
function sumar(a: number, b: number): number {
  return a + b;
}

// Función sin retorno (void)
function saludar(nombre: string): void {
  console.log(`Hola ${nombre}`);
}

// Arrow function
const multiplicar = (a: number, b: number): number => a * b;

// Métodos de clase
export class Calculadora {
  sumar(a: number, b: number): number {
    return a + b;
  }
}
```

### 4. Modificadores de Acceso

```typescript
export class Usuario {
  public nombre: string;      // Accesible desde cualquier lugar
  private edad: number;        // Solo accesible dentro de la clase
  protected email: string;     // Accesible en la clase y sus hijos
  
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;  // OK: estamos dentro de la clase
  }
}

const usuario = new Usuario('Ana', 30);
console.log(usuario.nombre);  // OK: public
// console.log(usuario.edad);  // ERROR: private
```

### 5. Decoradores

Los **decoradores** son funciones especiales que modifican clases, métodos o propiedades:

```typescript
// @Component es un decorador de Angular
@Component({
  selector: 'app-home',
  templateUrl: './home.html'
})
export class Home { }

// @Input permite recibir datos del componente padre
@Input() titulo: string;

// @Output permite enviar eventos al componente padre
@Output() clickBoton = new EventEmitter<void>();
```

---

## Ejemplos de Código Explicados

### Ejemplo 1: Componente Simple (InfoCards)

**Archivo: info-cards.ts**

```typescript
// Imports: traemos lo que necesitamos de Angular y FontAwesome
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGraduationCap, faUsers, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

// Decorador @Component: define la configuración del componente
@Component({
  selector: 'app-info-cards',        // Cómo usarlo en HTML: <app-info-cards></app-info-cards>
  imports: [                          // Módulos que este componente necesita
    FontAwesomeModule,                // Para mostrar iconos
    RouterLink                        // Para enlaces de navegación
  ],
  templateUrl: './info-cards.html',  // Archivo HTML del componente
  styleUrl: './info-cards.scss'      // Archivo de estilos
})
export class InfoCards {
  // Propiedades: almacenan los iconos de FontAwesome
  // Estas variables se usan en el template HTML
  faGraduationCap = faGraduationCap; // Icono de birrete (carreras)
  faUsers = faUsers;                 // Icono de personas (alumnos)
  faBookOpen = faBookOpen;           // Icono de libro (institucional)
}
```

**Archivo: info-cards.html** (simplificado)

```html
<div class="cards-container">
  <!-- Tarjeta 1: Carreras -->
  <div class="card">
    <!-- fa-icon usa la variable del TypeScript -->
    <fa-icon [icon]="faGraduationCap"></fa-icon>
    <h3>Carreras</h3>
    <p>Conocé nuestras tecnicaturas</p>
    <!-- routerLink navega sin recargar la página -->
    <a [routerLink]="['/carrera/gir']">Ver más</a>
  </div>
  
  <!-- Tarjetas 2 y 3 similares... -->
</div>
```

**Flujo de ejecución:**
1. Angular carga el componente `InfoCards`
2. Inicializa las variables de iconos
3. Renderiza el HTML sustituyendo `{{ }}` y `[ ]`
4. Usuario hace clic en "Ver más" → RouterLink navega a la ruta sin recargar

---

### Ejemplo 2: Componente con Estado (Header)

**Archivo: header.ts** (simplificado)

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  // Estado: controla si el menú mobile está abierto o cerrado
  mobileMenuOpen = false;  // Inicialmente cerrado
  
  // Método: alterna el estado del menú (abierto ↔ cerrado)
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    // Si era false → ahora es true
    // Si era true → ahora es false
  }
  
  // Método: cierra todos los menús
  closeMenus(): void {
    this.mobileMenuOpen = false;
  }
}
```

**Archivo: header.html** (simplificado)

```html
<header>
  <!-- Botón hamburguesa (solo visible en mobile) -->
  <button 
    class="hamburger" 
    (click)="toggleMobileMenu()">
    ☰
  </button>
  
  <!-- Menú mobile: se muestra/oculta según mobileMenuOpen -->
  <nav 
    class="mobile-menu" 
    [class.open]="mobileMenuOpen">
    
    <a 
      [routerLink]="['/inicio']" 
      (click)="closeMenus()">
      Inicio
    </a>
    
    <a 
      [routerLink]="['/contacto']" 
      (click)="closeMenus()">
      Contacto
    </a>
  </nav>
</header>
```

**Explicación línea por línea:**

```html
<!-- (click)="toggleMobileMenu()" -->
<!-- Cuando el usuario hace CLICK en el botón, ejecuta toggleMobileMenu() -->

<!-- [class.open]="mobileMenuOpen" -->
<!-- Si mobileMenuOpen es true, añade la clase CSS "open" al elemento -->
<!-- Resultado: <nav class="mobile-menu open"> -->

<!-- (click)="closeMenus()" -->
<!-- Al hacer click en un enlace, cierra el menú -->
```

**Flujo interactivo:**
1. Usuario hace clic en el botón hamburguesa
2. Se ejecuta `toggleMobileMenu()`
3. `mobileMenuOpen` cambia de `false` a `true`
4. Angular detecta el cambio y actualiza el DOM
5. La clase `.open` se añade al `<nav>`, mostrando el menú (CSS: `display: block`)
6. Usuario hace clic en "Inicio"
7. Se ejecuta `closeMenus()`, poniendo `mobileMenuOpen = false`
8. Angular actualiza el DOM, removiendo `.open` y ocultando el menú

---

### Ejemplo 3: Componente con Formulario (Contacto)

**Archivo: contacto.ts** (simplificado)

```typescript
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html'
})
export class Contacto {
  // Inyección de dependencia: obtenemos FormBuilder
  private fb = inject(FormBuilder);
  
  // Creamos un formulario reactivo con validaciones
  consultaForm = this.fb.group({
    nombre: ['', Validators.required],           // Campo requerido
    email: ['', [                                // Campo con múltiples validaciones
      Validators.required,                       // - Es requerido
      Validators.email                           // - Debe ser email válido
    ]],
    mensaje: ['', Validators.required]
  });
  
  // Método que se ejecuta al enviar el formulario
  enviarConsulta(): void {
    // Verificamos si el formulario es válido
    if (this.consultaForm.valid) {
      // Obtenemos los valores del formulario
      const formData = this.consultaForm.value;
      
      // Construimos el mailto con los datos
      const emailBody = `Nombre: ${formData.nombre}
Email: ${formData.email}
Mensaje: ${formData.mensaje}`;
      
      // Abrimos el cliente de email
      window.location.href = `mailto:contacto@ifts26.edu.ar?body=${emailBody}`;
      
      // Reseteamos el formulario
      this.consultaForm.reset();
    } else {
      // Si hay errores, marcamos los campos para mostrarlos visualmente
      this.consultaForm.markAllAsTouched();
    }
  }
}
```

**Archivo: contacto.html** (simplificado)

```html
<form [formGroup]="consultaForm" (ngSubmit)="enviarConsulta()">
  
  <!-- Campo nombre -->
  <div class="form-group">
    <label>Nombre</label>
    <input 
      type="text" 
      formControlName="nombre"
      placeholder="Tu nombre">
    
    <!-- Mensaje de error (solo se muestra si hay error y el campo fue tocado) -->
    @if (consultaForm.get('nombre')?.invalid && consultaForm.get('nombre')?.touched) {
      <span class="error">El nombre es requerido</span>
    }
  </div>
  
  <!-- Campo email -->
  <div class="form-group">
    <label>Email</label>
    <input 
      type="email" 
      formControlName="email"
      placeholder="tu@email.com">
    
    <!-- Errores específicos según la validación que falle -->
    @if (consultaForm.get('email')?.invalid && consultaForm.get('email')?.touched) {
      @if (consultaForm.get('email')?.errors?.['required']) {
        <span class="error">El email es requerido</span>
      }
      @if (consultaForm.get('email')?.errors?.['email']) {
        <span class="error">Debe ser un email válido</span>
      }
    }
  </div>
  
  <!-- Campo mensaje -->
  <div class="form-group">
    <label>Mensaje</label>
    <textarea 
      formControlName="mensaje"
      placeholder="Tu consulta"></textarea>
  </div>
  
  <!-- Botón enviar (deshabilitado si el formulario es inválido) -->
  <button 
    type="submit" 
    [disabled]="consultaForm.invalid">
    Enviar Consulta
  </button>
</form>
```

**Explicación del flujo:**

1. **Inicialización:**
   - Angular crea el formulario con `FormBuilder`
   - Cada campo tiene validaciones configuradas

2. **Usuario interactúa:**
   - Escribe en `<input formControlName="nombre">`
   - Angular actualiza automáticamente `consultaForm.value.nombre`

3. **Validación en tiempo real:**
   - Si el email es inválido y el campo fue tocado → muestra error
   - El botón se deshabilita si `consultaForm.invalid` es true

4. **Envío del formulario:**
   - Usuario hace clic en "Enviar Consulta"
   - Se ejecuta `(ngSubmit)="enviarConsulta()"`
   - Verifica `consultaForm.valid`
   - Si es válido → abre mailto con los datos
   - Si no → marca todos los campos con `.markAllAsTouched()` para mostrar errores

---

## Cómo Agregar una Nueva Página

### Paso 1: Crear el componente

```bash
# En la terminal, dentro de la carpeta del proyecto:
ng generate component pages/navegacion/nombre-pagina
```

Esto crea:
```
pages/navegacion/nombre-pagina/
├── nombre-pagina.ts      # Lógica
├── nombre-pagina.html    # Template
├── nombre-pagina.scss    # Estilos
└── nombre-pagina.spec.ts # Tests (opcional)
```

### Paso 2: Editar el componente

**nombre-pagina.ts:**

```typescript
import { Component } from '@angular/core';
import { PageBannerComponent } from '../../../components/page-banner/page-banner';

@Component({
  selector: 'app-nombre-pagina',
  imports: [PageBannerComponent],  // Importa componentes que necesites
  templateUrl: './nombre-pagina.html',
  styleUrl: './nombre-pagina.scss',
  standalone: true
})
export class NombrePagina {
  // Datos de la página
  titulo = 'Mi Nueva Página';
  descripcion = 'Descripción de la página';
}
```

**nombre-pagina.html:**

```html
<app-page-banner 
  [title]="titulo" 
  [subtitle]="descripcion">
</app-page-banner>

<main class="contenido">
  <section>
    <h2>Sección 1</h2>
    <p>Contenido de la sección...</p>
  </section>
</main>
```

### Paso 3: Agregar la ruta

**app.routes.ts:**

```typescript
import { NombrePagina } from './pages/navegacion/nombre-pagina/nombre-pagina';

export const routes: Routes = [
  // ... rutas existentes
  
  // Nueva ruta
  { path: 'nombre-pagina', component: NombrePagina },
  
  // ... resto de rutas
];
```

### Paso 4: Agregar al menú de navegación

**header.ts:**

```typescript
public navButtons = [
  // ... botones existentes
  
  // Nuevo botón
  {
    label: 'Mi Página',
    route: '/nombre-pagina'
  }
];
```

### Paso 5: Probar

1. Guarda todos los archivos
2. Angular se recarga automáticamente (si está en modo desarrollo)
3. Navega a `http://localhost:4200/nombre-pagina`

---

## Cómo Modificar Estilos

### Niveles de Estilos

1. **Estilos Globales** (`src/styles.scss`): Afectan a toda la aplicación
2. **Estilos de Componente**: Solo afectan a ese componente

### Ejemplo: Cambiar el Color Primario

**src/styles/_variables.scss:**

```scss
// Variables globales de colores
$color-primary: #1E6C93;      // Azul institucional
$color-secondary: #2C3E50;    // Gris oscuro
$color-accent: #E74C3C;       // Rojo para destacados

// Para cambiar el color primario, modifica esta línea:
$color-primary: #3498db;      // Nuevo azul más claro
```

### Ejemplo: Cambiar Estilos de un Componente

**header.scss:**

```scss
// Selector de la clase
.header {
  background-color: $color-primary;  // Usa variable global
  padding: 20px;
  
  // Selector anidado
  .logo {
    width: 150px;
    height: auto;
  }
  
  // Responsive: estilos para pantallas pequeñas
  @media (max-width: 768px) {
    padding: 10px;
    
    .logo {
      width: 100px;  // Logo más pequeño en mobile
    }
  }
}
```

### Estructura Típica de un SCSS de Componente

```scss
// 1. Imports (si necesitas variables globales)
@import '../../../styles/variables';

// 2. Contenedor principal
.componente-principal {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  
  // 3. Elementos internos (anidados)
  .titulo {
    font-size: 32px;
    color: $color-primary;
    margin-bottom: 20px;
  }
  
  .descripcion {
    font-size: 16px;
    line-height: 1.6;
    color: $color-secondary;
  }
  
  // 4. Estados interactivos
  .boton {
    background-color: $color-primary;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    
    // Pseudo-clase hover (al pasar el mouse)
    &:hover {
      background-color: darken($color-primary, 10%);
      transform: translateY(-2px);
    }
  }
  
  // 5. Responsive (mobile-first)
  @media (max-width: 768px) {
    padding: 20px 10px;
    
    .titulo {
      font-size: 24px;  // Más pequeño en mobile
    }
  }
}
```

---

## Troubleshooting Común

### Error: "Cannot find module"

**Problema:**
```
Error: Cannot find module '@angular/core'
```

**Solución:**
```bash
# Instalar todas las dependencias
npm install
```

---

### Error: "Component not found in routes"

**Problema:**
```
Error: No component found for route 'mi-pagina'
```

**Soluciones:**
1. Verifica que el componente está importado en `app.routes.ts`
2. Verifica que el `path` coincide con la URL
3. Verifica que el componente está exportado con `export class`

---

### La página no se actualiza

**Problema:**
Hiciste cambios pero no se reflejan en el navegador.

**Soluciones:**
1. Guarda todos los archivos (Ctrl+S o Cmd+S)
2. Refresca el navegador (F5 o Ctrl+R)
3. Si persiste, reinicia el servidor de desarrollo:
   ```bash
   # Detén el servidor (Ctrl+C)
   # Inícialo de nuevo
   npm start
   ```
4. Limpia la caché del navegador (Ctrl+Shift+Supr)

---

### Error de sintaxis en TypeScript

**Problema:**
```
Error: Type 'string | undefined' is not assignable to type 'string'
```

**Causa:**
TypeScript es estricto con los tipos. Una variable puede ser `undefined` y estás tratando de usarla como `string`.

**Solución:**
```typescript
// Opción 1: Operador de aserción no-null (!)
const nombre = formulario.value.nombre!;

// Opción 2: Operador opcional (?.)
const nombre = formulario.value.nombre?.toUpperCase();

// Opción 3: Valor por defecto
const nombre = formulario.value.nombre || 'Sin nombre';

// Opción 4: Verificación explícita
if (formulario.value.nombre) {
  const nombre = formulario.value.nombre;
  console.log(nombre);
}
```

---

### Estilos no se aplican

**Problema:**
Modificaste un archivo SCSS pero los estilos no cambian.

**Soluciones:**
1. Verifica que el archivo SCSS está vinculado en el componente:
   ```typescript
   @Component({
     styleUrls: ['./componente.scss']  // ← Verifica esta línea
   })
   ```

2. Verifica la especificidad del selector CSS:
   ```scss
   // Menos específico (puede ser sobrescrito)
   .boton { color: red; }
   
   // Más específico (tiene prioridad)
   .contenedor .boton { color: blue; }
   ```

3. Usa `!important` solo como último recurso:
   ```scss
   .boton {
     color: red !important;  // Fuerza este estilo
   }
   ```

---

### RouterLink no navega

**Problema:**
Haces clic en un enlace y no pasa nada.

**Soluciones:**
1. Verifica la sintaxis del RouterLink:
   ```html
   <!-- ✅ CORRECTO (array binding) -->
   <a [routerLink]="['/contacto']">Contacto</a>
   
   <!-- ❌ INCORRECTO (string binding, no funciona con rutas dinámicas) -->
   <a routerLink="/contacto">Contacto</a>
   ```

2. Verifica que importaste RouterLink en el componente:
   ```typescript
   import { RouterLink } from '@angular/router';
   
   @Component({
     imports: [RouterLink]  // ← Debe estar aquí
   })
   ```

3. Verifica que la ruta existe en `app.routes.ts`

---

## Recursos Adicionales

### Documentación Oficial

- **Angular:** https://angular.io/docs
- **TypeScript:** https://www.typescriptlang.org/docs
- **SCSS:** https://sass-lang.com/documentation

### Tutoriales Recomendados

- **Angular Tour of Heroes:** https://angular.io/tutorial (tutorial oficial paso a paso)
- **TypeScript Handbook:** https://www.typescriptlang.org/docs/handbook/intro.html
- **CSS-Tricks (SCSS):** https://css-tricks.com/snippets/sass/

### Comunidad

- **Stack Overflow:** https://stackoverflow.com/questions/tagged/angular
- **Angular Discord:** https://discord.gg/angular
- **Foro Oficial de Angular:** https://github.com/angular/angular/discussions

---

## Conclusión

Este documento te proporciona las bases para entender y trabajar con el proyecto IFTS26. Recuerda:

1. **Experimenta:** La mejor forma de aprender es haciendo cambios y viendo qué pasa
2. **Lee el código:** Los comentarios en los archivos .ts te guiarán
3. **Consulta la documentación:** Angular tiene excelente documentación oficial
4. **Pide ayuda:** Si te trabas, pregunta en los foros o a tus compañeros

¡Éxitos en tu desarrollo! 🚀
