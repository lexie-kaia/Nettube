### Reference

- [Mongoose docs](https://mongoosejs.com/docs/guide.html)
- [MongoDB 기초부터 실무까지(feat.Node.js)](https://inf.run/xovo)
- [MongoDB Documentation Query and Projection Operators](https://docs.mongodb.com/manual/reference/operator/query/)

<br>

## NoSQL


## Connecting Database with Mongoose
- `$ yarn add mongoose`
```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', () => console.log('db connection error'));
db.once('open', () => console.log('db connected'));
```


## preparing Mongoose schema
- **defining schema**
```js
const kittySchema = mongoose.Schema({
  name: String
})
```

- **compiling shema into model**
```js
const Kitten = mongoose.model('Kitten', kittySchema)
```

## crud

- **Creating**
```js
const silence = new Kitten({ name: 'Silence'});
silence.save();
```
```js
const silence = Kitten.create({ name: 'Silence'});
// Model.create(doc) = new Model(doc).save()
// shortcut for saving documents to the database
```

- **Reading**
```js
Kitten.find({});
Kitten.find({ name: 'Silence'});
Kitten.find({ name: { $regex: 'Sil', $options: i }}) // i : case insensitivity
```
```
// query operators
// $gte : greater than or equal to
// $gt : greater than
// $lte : less than or equal to
// $lt : less than
// $in : matches any of the values in an array
// $not
// $regex
```

```
Kitten.findById(id);
```