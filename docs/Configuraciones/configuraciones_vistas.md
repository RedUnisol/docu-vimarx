---
sidebar_position: 13
sidebar_label: Modificar Vistas
---

# 📑 Guía para modificar vistas en el ERP (DevExpress XAF)

:::tip
Objetivo: personalizar las vistas del ERP mediante el Editor de Modelo, ajustando campos, layouts y acciones según las necesidades de usuarios o modelos.
:::

---

## ✅ Acceder al editor de configuración

✔️ Desde el menú principal del sistema, ir a:  
`Configuración → Seguridad → Configuración de aplicaciones`  

✔️ Se abrirá la ventana **Application Settings (Editor de Modelo)**

---

## 1️⃣ Elegir qué tipo de configuración modificar

✔️ En la lista inicial encontrarás dos grandes grupos:  
- **Usuarios** → los cambios afectan solo a ese usuario  
- **Modelos** → los cambios se aplican a todos los usuarios que usen ese modelo  

💡 Consejo:  
- Para cambios generales, trabajar sobre **Modelos**  
- Para ajustes puntuales, hacerlo sobre **Usuarios**  

✔️ La lista se puede filtrar por cualquier campo, lo que facilita encontrar rápidamente el usuario o modelo deseado.

---

## 2️⃣ Abrir las vistas del módulo

✔️ Al seleccionar un Usuario o Modelo, se desplegará la opción:  
`Gestión de mutuales/financieras → Views`  

✔️ Allí encontrarás todos los módulos y sus vistas.

---

## 3️⃣ Identificar el módulo correcto

Las vistas están organizadas en carpetas según su origen:  
- **ClasesBase** → vistas genéricas usadas en varios módulos  
- **DevExpressApp** → vistas provistas por el framework (dashboards, validación, seguridad)  
- **F.Module** → vistas de los módulos funcionales del ERP (las más utilizadas)  

⚠️ Recomendación: **no modificar las vistas de DevExpressApp**.  
En la práctica, la mayoría de las modificaciones necesarias estarán dentro de **F.Module**.

---

## 4️⃣ Seleccionar la vista a modificar

✔️ Dentro del módulo elegido, buscá la vista que quieras cambiar.  
Las vistas se reconocen porque terminan en:  
- **DetailView** → vista de detalle de un registro (ejemplo: ficha de un asiento)  
- **ListView** → vista de lista de registros (ejemplo: listado de facturas)  
- **LookupListView** → vista de búsqueda o selección  

Ejemplo: `Asiento_DetailView` → vista de detalle de un asiento contable.

---

## 5️⃣ Modificar la vista (I)

Al seleccionar una vista, se habilitan tres secciones clave:  

- **Items** → campos que se muestran  
  • Cambiar título  
  • Ocultar campos (Visible)  
  • Definir solo lectura (ReadOnly)  
  • Ajustar orden (Index)  

- **Layout** → organización visual de los campos  
  • Agrupar campos  
  • Cambiar orden  
  • Definir si los grupos aparecen desplegados  

- **HiddenActions** → acciones ocultas en esa vista  
  • Ocultar botones o funciones innecesarias para los usuarios  

---

## 6️⃣ Modificar la vista (II)

✔️ En la sección **Layout**, hacer clic derecho en *“mostrar pantalla de personalizaciones”*  

✔️ Se abrirá un modal donde podrás:  
  • Arrastrar campos o espacios  
  • Crear nuevas secciones  
  • Agrupar elementos según necesidad  

---

## 7️⃣ Guardar y validar

✔️ Guardar los cambios en el editor  
✔️ Cerrar y volver a abrir el ERP para aplicar las modificaciones  
✔️ Revisar la pantalla modificada:  
  • Campos visibles y orden correcto  
  • Grupos con nombres claros  
  • Acciones ocultas funcionando  

Si algo no quedó cómodo, volver al editor y ajustar.

---

## ✅ Buenas prácticas

:::info
- Trabajar sobre **Modelos** cuando el cambio debe ser general  
- Usar nombres claros en campos y grupos  
- Ocultar lo innecesario para simplificar la vista  
- Proteger datos críticos con campos de solo lectura  
- Mantener consistencia entre vistas similares (ejemplo: todas las vistas de préstamos con la misma estructura de grupos)
:::