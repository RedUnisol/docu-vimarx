import Tag from '@site/src/components/HomepageFeatures/Tag';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

--- 
title: Roles
description: Roles de usuario en el sistema
---

<Tabs>
<TabItem value="roles" label="Roles" default>
Los roles de usuario permiten definir permisos y accesos dentro del sistema, asegurando que cada usuario tenga las capacidades adecuadas para realizar sus tareas sin comprometer la seguridad o integridad de la información.
</TabItem>
<TabItem value="permissions" label="Permisos">
Los permisos son configuraciones específicas que determinan qué acciones puede realizar un usuario dentro del sistema.
<ul>
  <li><strong>Lectura:</strong> Permite ver información sin modificarla.</li>
  <li><strong>Escritura:</strong> Permite crear o modificar información.</li>
  <li><strong>Administración:</strong> Permite gestionar configuraciones y usuarios.</li>
</ul>
</TabItem>
</Tabs>

### Roles de usuario
Los <Tag color="#FF5733">roles</Tag> son <Tag color="#3a4aa8ff">conjuntos</Tag> de permisos que se asignan a los usuarios para definir sus capacidades dentro del

:::note[una nota]
Los roles y permisos son fundamentales para la seguridad y organización del sistema, permitiendo un control granular sobre quién puede hacer qué.
:::
:::tip[un tip o lo que quieras]
Los roles pueden ser personalizados según las necesidades de la entidad, permitiendo una flexibilidad total en la gestión de usuarios.
:::
:::info
Los permisos pueden ser asignados a roles específicos, lo que facilita la administración de usuarios y sus capacidades dentro del sistema.
:::
:::caution
Es importante revisar periódicamente los roles y permisos asignados para asegurar que se mantengan actualizados
y alineados con las políticas de seguridad de la entidad.
:::
:::danger
Los roles y permisos mal configurados pueden llevar a brechas de seguridad o accesos no autorizados a información.
![alt text](https://picsum.photos/600/400 "Imagen de ejemplo")
:::

```jsx title="Ejemplo de código"
import React from 'react';
import { Button } from '@site/src/components/Button';
const Example = () => {
  return (
    <Button onClick={() => alert('¡Hola, mundo!')}>
      Click me
    </Button>
  );
};
export default Example;
```
```jsx title="Ejemplo de código"
import React from 'react';
import { Button } from '@site/src/components/Button';
const Example = () => {
    // highlight-next-line
  console.log('Este es un ejemplo de código en React');
  return (
    <Button onClick={() => alert('¡Hola, mundo!')}>
      Click me
    </Button>
  );
};
export default Example;
```