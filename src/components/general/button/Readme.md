Button example:

```js
[
    <Button key={1} text="Primary" type="primary" />,
    <Button key={2} text="Secondary" type="secondary" />,
    <Button key={3} text="Large" size="large"></Button>
]
```
<!--
```js
<Button text="Click Me" size="large">Push Me</Button>
```

You can add a custom props to an example wrapper:

```js { "props": { "className": "checks" } }
<Button text="Click Me">I’m transparent!</Button>
```

Or disable an editor by passing a `noeditor` modifier:

```jsx noeditor
<Button text="Click Me">Push Me</Button>
```

To render an example as highlighted source code add a `static` modifier:

```jsx static
import React from 'react';
```

Examples with all other languages are rendered only as highlighted source code, not an actual component:

```html
<Button text="Click Me" size="large">Push Me</Button>
``` -->