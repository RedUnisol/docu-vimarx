---
sidebar_position: 3
sidebar_label: Reportes en sistema
---

# 📊 Reportes en Sistema

:::tip Objetivo
Este procedimiento detalla —con un enfoque exhaustivo y metodológico— las directrices para **localizar, comprender, editar y desplegar reportes** en el sistema VIMARX.  
También especifica los criterios de decisión sobre cuándo utilizar el **Diseñador de informes** y cuándo el módulo de **Listados**, sin alterar la estructura interna de los diseños.
:::

## 🖥️ 1. Acceso al entorno operativo  

Para ingresar al módulo de reportes:

- 📝 **Reportes → Reportes:** orientado a la revisión estructural y semántica de cada informe (diseño, campos, fórmulas, formato de salida).  
- 📂 **Reportes → Listados:** centrado en la administración de conjuntos documentales asociados a trámites u operaciones (pagarés, solicitudes, detalle de cuotas), sin modificar el artefacto original del reporte.

---

## 📋 2. Análisis de la grilla de reportes  

La **grilla de Reportes** constituye un repositorio sistemático de informes. Entre las columnas más relevantes se encuentran:

| 📂 **Columna**        | 📝 **Descripción**                                                        |
|----------------------|--------------------------------------------------------------------------|
| 🏷️ **Display Name**   | Denominación identificatoria del reporte                                 |
| 🗂️ **Data Type**      | Módulo o submódulo al que se vincula (Socio Mutual, AMT, Proceso Débito)  |
| 🧩 **Is Inplace Report** | Determina si el informe se ejecuta de manera embebida                  |
| 📑 **Copias**         | Número de ejemplares predeterminados                                     |
| 📄 **Formato / salida** | Naturaleza de la exportación (PDF, Txt, Ninguno) y destino asociado     |
| 🕑 **Modificado / Uso**| Última modificación y frecuencia de utilización                         |

![Grilla de Reportes](/img/reportes_sistemas/reporte_sistema_1.png)
![Grilla de Reportes](/img/reportes_sistemas/reporte_sistema_2.png)

> 📝 **Ejemplos representativos:** ADM CENTRAL V2 (Proceso Débito), Alerta UIF, AMT Comprobante (PDF), Alta Bica (Txt) y RECIBOS VARIOS CANC.

---

## 📝 3. Apertura de la ficha técnica  

Mediante clic en **Editar** se accede a la ficha de configuración del reporte, donde se observan campos críticos:

- 🗂️ **Report Type:** habitualmente *xaf custom (XtraReports)*  
- 📄 **Basado en:** objeto de negocio o clase de referencia  
- 📁 **Report File Name:** archivo físico asociado (.xafrep)  
- 🔖 **Tipo (Data Type)** y **Modo Reporte**  
- ⚙️ Parámetros de uso, versión, origen y condición  
- 📝 Opciones como **Generar Copia** o **Is Inplace Report**  

![Imagen botón editar](/img/reportes_sistemas/reporte_sistema_3.png)
![Imagen botón editar 2](/img/reportes_sistemas/reporte_sistema_4.png)

---

## 🎨 4. Intervención mediante el Diseñador de informes  

La funcionalidad **Mostrar el Diseñador de informes** abre el editor XtraReports, caracterizado por:

- 🎛️ **Bandas** (reportHeaderBand, detailBand)  
- 🧰 **Toolbox** con controles textuales, tabulares, gráficos y de formateo  
- 📝 **Barra de herramientas** tipográfica y de estilo  
- 🧮 **Panel de Expresiones** para fórmulas, concatenaciones y condicionales  
- 📑 **Pestañas de Diseño**, **Vista previa** y **Scripts** con monitoreo de errores  

:::warning Importante
Las modificaciones habituales incluyen:
- Alteración de textos fijos  
- Incorporación de campos dinámicos (ej. `[Nro Socio]`, `[Apellido]`)  
- Inserción de tablas  
- Definición de expresiones lógicas y ajuste de parámetros de impresión  

Una vez realizadas, es indispensable **guardar**, **cerrar** y **verificar la emisión real** en el módulo correspondiente.
:::

![Boton diseñador de informes](/img/reportes_sistemas/reporte_sistema_5.png)

---

## 📚 5. Gestión documental mediante Listados  

La ruta **Reportes → Listados** permite configurar agrupamientos documentales. Elementos clave:

| 📂 **Elemento**  | 📝 **Descripción**                             |
|-----------------|------------------------------------------------|
| 📝 **Encabezado** | Nombre, Claves, estado Activo, jerarquía Superior y opción de impresión consolidada |
| 🗂️ **Pestañas**  | Reportes V2, Reportes Ordenados y Formularios |

:::warning Ejemplo paradigmático
**SOLICITUDBASE** concentra documentos como:
- Detalle Cuotas  
- Solicitud web Descuento de Haberes  
- Solicitud web Pagaré  
- Solicitud web Préstamo  
- Solicitud web Socios UIF  

Aquí es factible agregar o retirar reportes, modificar el orden de emisión o ajustar copias, **sin intervención en el diseño base**.
:::

![Listado paradigmático SOLICITUDBASE](/img/reportes_sistemas/reporte_sistema_6.png)

---

## 🧭 6. Criterios de decisión  

- ✏️ **Modificar contenido, maquetación o estructura visual:** usar **Reportes → Reportes → Diseñador**  
- 📂 **Incorporar o excluir documentos de un paquete de emisión:** usar **Reportes → Listados**, privilegiando **SOLICITUDBASE**  

---

## 🛡️ 7. Principios de buenas prácticas  

- 📝 **Versionar antes de editar** (clonado o numeración V2, V3)  
- 🏷️ Mantener **nomenclatura rigurosa**  
- 📒 **Registrar cambios en bitácora** (fecha, responsable, justificación)  
- 👀 **Validar** mediante vista previa **con datos reales**  
- 🧾 Corroborar **formato de salida** y **número de copias**  
- ⏳ Coordinar **ventanas de mantenimiento** para reportes de **alta criticidad**  

---
