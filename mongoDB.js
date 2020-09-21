const { MongoClient, ObjectID } = require('mongodb')
// const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect database!')
    }

    const db = client.db(databaseName)

    // READ
    // db.collection('users').findOne({ _id: new ObjectID('5f685dc394c3597f4bc9cff2') }, (err, user) => {
    //     if (err) {
    //         return console.log('Unable to fetch data')
    //     }
    //     console.log(user)
    // })
    // db.collection('users').find({ age: 27 }).toArray((err, users) => {
    //     if(err){
    //         return console.log('Unable to fetch data')        
    //     }
    //     console.log(users)
    // })
    // db.collection('users').find({ age: 27 }).count((err, count) => {
    //     if(err){
    //         return console.log('Unable to fetch data')        
    //     }
    //     console.log(count)
    // })

    db.collection('tasks').findOne({ _id: new ObjectID('5f685e876fcf5002296a685e') }, (err, task) => {
        if (err) {
            return console.log('Unable to fetch data')
        }
        console.log(task)
    })
    db.collection('tasks').find({ completed: false }).toArray((err, tasks) => {
        if(err){
            return console.log('Unable to fetch data')        
        }
        console.log(tasks)
    })

    // CREATE
    // db.collection('users').insertOne({
    //     name: 'Andrew',
    //     age: 27
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert data')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jane',
    //         age: 27
    //     },
    //     {
    //         name: 'John',
    //         age: 25
    //     }
    // ], (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert data')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Read a book',
    //         completed: false
    //     },
    //     {
    //         description: 'Eat launch',
    //         completed: true
    //     },
    //     {
    //         description: 'Feed cat',
    //         completed: true
    //     }
    // ], (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert tasks')
    //     }
    //     console.log(result.ops)
    // })
})