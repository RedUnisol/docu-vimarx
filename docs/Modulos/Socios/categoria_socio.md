---
sidebar_position: 1
sidebar_label: Categorías de Socios
---

# 🏷️ Categorías de Socios

El submódulo **Categorías de Socios** administra las diferentes categorías societarias de la mutual, los **motivos de alta o baja** y el **historial de cambios** para cada socio.  
Es un componente clave para **clasificar asociados**, definir su operatoria y garantizar la **trazabilidad de los estados**.

---

## 🖥️ 1. Vista Principal – Listado de Categorías

:::info Pantalla principal
La pantalla principal muestra todas las categorías definidas en el sistema.
:::

### 🔑 1.1 Columnas principales

| Campo                                | Descripción                                                                 |
|--------------------------------------|-----------------------------------------------------------------------------|
| 🏷️ **Nombre**                        | Código o denominación de la categoría *(ej. Activo, Adherente Convenio, MUPOL)* |
| 🏛️ **Categoría INAES**                | Clasificación oficial según normativa del INAES                             |
| ❌ **Baja**                           | Indica si la categoría está dada de baja                                    |
| 💳 **Tipo Cuota Socio / Aplicable**   | Esquema de cuota asignado a esa categoría                                   |
| 📤 **Código Exportar**                | Código de referencia para exportación o integración con otros sistemas      |

### 🔎 1.2 Funcionalidad

- Permite filtrar por **nombre** o **tipo de categoría**.  
- **Doble clic →** abre la vista de detalle para edición.  

---

## 🖱️ 2. Vista de Detalle – Edición de Categoría

En esta pantalla se configuran los atributos de cada categoría.

### 📋 2.1 Campos principales

- 🏷️ **Nombre** – Identificador de la categoría  
- 🎂 **Edad Mínima** – Restricción de edad para pertenecer a la categoría  
- 🔢 **Requiere Nro Socio** – Indica si exige un número de socio asignado  
- ✅ **Habilitado para Operar** – Define si puede realizar operaciones en la mutual  
- 💳 **Tipo Cuota Socio / Categoría INAES / Tipo Aplicable** – Configuración de cuotas y clasificación  
- 📤 **Código Exportar** – Identificador para procesos de integración  

### 📑 2.2 Pestañas de detalle

| Pestaña         | Contenido principal                                   |
|-----------------|-------------------------------------------------------|
| 👥 **Socios**    | Listado de socios actualmente en esa categoría        |
| 🪢 **Cuotas Hijas** | Relación de categorías dependientes o jerárquicas |

---

## 🗂️ 3. Historial de Categorías

Permite visualizar el **log de cambios** de categorías para cada socio.

| 📅 **Fecha** | 🏷️ **Categoría** | 📝 **Motivo de Cambio** | 📌 **Notas** |
|--------------|------------------|--------------------------|--------------|

Ejemplo de motivos: *Alta por solicitud, Baja por renuncia, Corrección, Fallecimiento, Moroso, etc.*

:::tip Beneficio
Mantiene la **trazabilidad histórica** de la relación societaria del socio.  
Muy útil para **auditorías, reportes regulatorios y control interno**.
:::

---

## 🌐 4. Categorías Socios Externa

Espacio reservado para categorías cargadas desde **fuentes externas o integraciones**.  
Se utiliza para **homologar categorías entre sistemas** o convenios interinstitucionales.

---

## 📑 5. Motivo Cambio Categoría

En esta vista se gestionan los **motivos disponibles** para cambios de categoría.

Ejemplos predefinidos:

- ✅ Alta  
- ✏️ Corrección  
- ⚰️ Fallecimiento  
- ⚖️ Gestión Judicial  
- 🚫 Moroso  
- 📉 No usa servicios  
- 📝 Renuncia  
- ❌ Irrecuperable  

:::tip Función
Estos motivos se seleccionan al registrar un cambio en el historial → garantizan **uniformidad, orden y consistencia** en la información.
:::

---

## 🔄 6. Flujos de Uso Típicos

1. ➕ **Crear categoría nueva:** Definir nombre, tipo de cuota y parámetros.  
2. ✏️ **Editar categoría existente:** Modificar atributos o habilitar/deshabilitar.  
3. 🔁 **Registrar un cambio:** Desde ficha de socio → historial → seleccionar motivo.  
4. 📊 **Consultar historial:** Ver todas las categorías asignadas y sus fechas.  

---

:::note ✅ Beneficios

La correcta definición de ***categorías*** permite una gestión más precisa, una aplicación coherente de beneficios y una presentación normativa sin errores. Es un componente clave para la trazabilidad operativa y la planificación estratégica.

:::

