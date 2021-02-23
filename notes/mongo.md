### Reference

- [Mongoose docs](https://mongoosejs.com/docs/guide.html)
- [MongoDB 기초부터 실무까지(feat.Node.js)](https://inf.run/xovo)
- [MongoDB Documentation Query and Projection Operators](https://docs.mongodb.com/manual/reference/operator/query/)
- [SQL vs NoSQL](https://academind.com/tutorials/sql-vs-nosql/)

<br>

## SQL vs NoSQL
- SQL(structured Query Language)
  - a language designed for RDBMS(Relational Database Management Systems)
  - Relational Database
    1. Strict Schema
      - Data is stored in database tables by following a strict data schema
    2. Relations
      - Data is distributed across multiple tables which are connected via relations  
      -> minimizing data redundancy(not repeating information, only refering to it)
- NoSQL
  - JSON-like key-value pair 'document' -> 'collection' -> 'database'  
    -> flexible

<br>

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
```js
// query operators
// $gte : greater than or equal to
// $gt : greater than
// $lte : less than or equal to
// $lt : less than
// $in : matches any of the values in an array
// $ne : not equal to 
// $not : inverts the effect of a query expression(logical operator)
// $regex
```

```js
Kitten.findById(id);
```
- **Updating**
```js
Kitten.findOneAndUpdate({name: 'Silence'}, {name: 'Shh'})
```

```js
Kitten.findByIdAndUpdate(id, {name: 'Fluffy'})
// this method skips mongoose schema validation and updates nongodb database directly

const kitty = Kitten.findById(id)
kitty.name = 'Fluffy'
kitty.save()
```

- **Deleting**
```js
Kitten.findByIdAndDelete(id)
```
```js
Kitten.findOneAndDelete(id)
Kitten.findOneAndRemove(id)
```
- This function differs slightly from `Model.findOneAndRemove()` in that `findOneAndRemove()` becomes a MongoDB findAndModify() command, as opposed to a `findOneAndDelete()` command. For most mongoose use cases, this distinction is purely pedantic. <u>You should use `findOneAndDelete()` unless you have a good reason not to.</u>