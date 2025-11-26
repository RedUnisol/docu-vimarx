# ❓ Preguntas Frecuentes

A continuación encontrarás respuestas a las consultas más comunes relacionadas con la gestión de **listados** y **préstamos** dentro del sistema.

---

## 📑 Listados

<details>
  <summary><strong>🧭 ¿Cómo ordeno los documentos de un listado?</strong></summary>

Para modificar el orden en que se imprimen o visualizan los documentos vinculados a un listado, seguí estos pasos:

1. Ingresá al módulo **Reportes → Listados**.  
2. Seleccioná el listado que querés modificar.  
3. En la pestaña **Reportes ordenados**, vas a ver todos los documentos asociados.  
4. En la columna **Orden**, ingresá el número correspondiente a cada documento (por ejemplo, **1**, **2**, **3**, etc.).  
5. Si querés que todos los documentos se impriman en un único archivo, marcá la opción **“Imprimir en un solo documento”**.

:::warning[Sugerencia]
Asigná números consecutivos para evitar confusiones en el orden final de impresión.
:::

</details>
---

## 💰 Préstamos

<details>
   <summary><strong>🔄 ¿Cómo anular un préstamo?</strong></summary>

Para anular un préstamo o crédito, asegurate de cumplir con los siguientes requisitos y pasos:

#### 1. Verificar permisos
- El usuario debe tener habilitado el permiso **`PRTANUL`** para poder anular préstamos.  
- También es necesario contar con el permiso para **cambio de fecha de trabajo**.

#### 2. Trabajar con la fecha original del préstamo
Por motivos de seguridad, la anulación solo puede realizarse en la **misma fecha en que se generó el préstamo**.

Para cambiar la fecha de trabajo:
1. Ingresá a **Configuración → Empresas**.  
2. En la barra superior, modificá la fecha al día en que se emitió el préstamo.

#### 3. Verificar cobros asociados
No se pueden anular préstamos que ya tengan **cobros efectuados**.  
Si existen cobros, deben eliminarse previamente:

1. Ingresá a **Cobros préstamos → Cobros**.  
2. Buscá el préstamo por número.  
3. Seleccioná los cobros y eliminálos.  
4. Luego, eliminá también los **asientos contables** generados:
   - Ir a **Contabilidad → Procesos habituales → Asientos**.
   - Buscar el asiento correspondiente a cada cobro y eliminarlo.

:::warning[Importante]
 Al eliminar cobros o asientos, **no quedará registro alguno en la base de datos**.  
Asegurate de hacerlo únicamente si es estrictamente necesario.
:::
</details>
---

