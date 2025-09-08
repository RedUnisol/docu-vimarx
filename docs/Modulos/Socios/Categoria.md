---
sidebar_position: 1
sidebar_label: Categorías de Socios
---

# 👨‍👩‍👧‍👦 Categorías de Socios

:::tip Rol del Módulo
El módulo **Categorías de Socios** permite clasificar a los asociados según criterios internos, normativos y operativos. Su correcta configuración impacta directamente en la gestión institucional, la aplicación de cuotas sociales y la presentación normativa ante organismos como el INAES.
:::

---

## 🔧 1. Tipologías de Categoría

:::info Clasificación institucional
Las categorías definen el tipo de vínculo que cada persona mantiene con la entidad, habilitando o restringiendo derechos, obligaciones y accesos.
:::

### 🏛️ 1.1 Categorías Internas

- Asociados que pertenecen directamente a la entidad.
- Tipologías tradicionales:
  - Activo
  - Adherente
  - Participante
  - Otros definidos por la entidad
- Parámetros configurables:
  - Edad mínima de ingreso
  - Asignación de número de socio
  - Habilitación operativa
  - Tipo y monto de cuota social *(vinculado al submódulo Cuotas Sociales)*

### 🔗 1.2 Categorías Externas

- Asociados provenientes de convenios interinstitucionales.
- No son socios plenos, pero acceden a servicios según el convenio vigente.
- Pueden tener cuotas sociales diferenciadas o acceso limitado.

---

## ⚠️ 2. Categorías Especiales

:::warning Uso restringido
Estas categorías no representan socios activos y se excluyen de reportes normativos como el Artículo 9 del INAES.
:::

- **No Informar**  
  Personas registradas sin condición de socio (proveedores, contactos, registros internos).

- **Externo Mínimo**  
  Personas con vínculo mínimo, sin derechos ni obligaciones asociativas.

---

## ⚙️ 3. Parámetros de Configuración

Cada categoría puede definirse con los siguientes atributos:

| Parámetro                  | Descripción                                                  |
|----------------------------|--------------------------------------------------------------|
| Nombre interno             | Identificador institucional                                 |
| Tipo de categoría          | Interna / Externa / Especial                                |
| Edad mínima                | Requisito para ingreso                                       |
| Número de socio requerido  | Sí / No                                                      |
| Habilitación operativa     | Permite o restringe el uso de módulos                       |
| Tipo de cuota social       | Fija / Variable / Exenta *(vinculado a Cuotas Sociales)*     |
| Monto de cuota             | Definido en el submódulo correspondiente                    |

---

## 📄 4. Relación con el Artículo 9 del INAES

:::info Presentación normativa
La clasificación de socios impacta directamente en la presentación oficial ante el INAES.
:::

- Solo las categorías habilitadas se incluyen en el reporte del Artículo 9.
- Las categorías **No Informar** y **Externo Mínimo** quedan excluidas automáticamente.
- Este criterio garantiza coherencia normativa y evita errores en la exportación.

---

## 🧭 5. Visualización y Gestión

En la vista principal del módulo, el sistema permite:

- 📋 Listado de socios filtrado por categoría
- 🔍 Consulta de parámetros configurados por tipo
- 💳 Visualización de cuotas sociales asociadas a cada categoría

---

## 🧠 Visión Institucional

:::note
La correcta definición de categorías permite una gestión más precisa, una aplicación coherente de beneficios y una presentación normativa sin errores. Es un componente clave para la trazabilidad operativa y la planificación estratégica.
:::