Pagination example:

```js
function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}

<Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
```

```js
// "Simple mode"
<Pagination simple defaultCurrent={2} total={50} />
```



