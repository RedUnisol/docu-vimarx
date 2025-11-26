---
sidebar_position: 12
sidebar_label: Generación de Excel para Cobros
---

# 📤 Generación de Excel para Cobros

:::info[Descripción general]
Este procedimiento permite **extraer cuotas vencidas o no cobradas** y generar un archivo Excel con el **formato requerido por el banco o proceso de débito**, listo para ser enviado o procesado.
:::

## 🧭 Pasos para preparar el archivo de débito

---

### 1. 📂 Aplicar filtros en Cuotas / Cobros

Desde el módulo `Prestamos → Cuotas`, aplicar los filtros necesarios:

ejemplo de filtros comunes:
- **Saldo de cuota > 0**  
- **Número de cuotas > 0**  
- **Rango de fechas** (ej.: desde `01/11/2021` hasta la fecha objetivo)

---

### 2. 📅 Ajustar condiciones de vencimiento

Configurar el filtro para traer únicamente:

- Cuotas con **vencimiento menor o igual** a la fecha objetivo

Esto asegura que se incluyan solo las cuotas que deben cobrarse.

---

Ahora podemos realizar dos pasos posibles:

### A. ✅ Marcar y exportar un excel comun

- Seleccionar las cuotas que correspondan  
- Clic derecho → Abrir como XLS


### B. 🧾 Envío por CBU

- Copiamos el filtro desde boton `Editar filtro` y copiamos el codigo de los filtros
- Vamos a `Prestamos → Proceso Debito → Debitos EXCEL`
- Seleccionamos **"nuevo"**
- Elegimos el formato Excel que queremos utilizar
- En el campo **criterio** pegamos el filtro copiado anteriormente (borramos la parte de la fecha ya que la cargamos desde el campo del formulario)
- Cargamos la **fecha de vencimiento** que queremos utilizar
- Clic en **Enviar** en la barra superior

---

:::note[💡 Recomendaciones]
- ✅ Validar que las cuotas seleccionadas cumplan con los criterios de vencimiento y saldo  
- ✅ Confirmar que el formato del Excel coincida con el requerido por la entidad receptora  
- ✅ Conservar una copia del archivo exportado para auditorías o controles posteriores
:::
