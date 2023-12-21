# Tips and Lessons

Should pass many flat props into `Table` rather than passing one deep prop. Advantages:
* Easier for the caller to generate the data.
* The caller has less knowledge of `Table`'s implementation.
* A deep structure has higher dependency. It's like having a tall object model.

It's unavoidable to repeat some property names. There are only two choices:
1. Repeat the name of the column names: name, email address, etc.
2. Repeat the name of the DOM's property or abstraction level: style, tooltip, etc.

Option 1:
```javascript
const styles = { name: 'something', email: 'something'}
const columnNames = ['name', 'email']
```

Option 2
```javascript
const name = { style: 'something', columnIndex: 0 }
const email = { style: 'something', columnIndex: 1 }
```