Input Number example

```js
function onChange(value) {
  console.log('changed', value)
}

<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
```

Deciminal example

```js

let onChange = (v) => console.log('changed: ', v);

<InputNumber min={0} max={10} step={0.1} onChange={onChange} />
```