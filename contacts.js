const {mongoClient} = require('mongodb');
module.exports = {
    // return all documents in the colletion to the browser
    app.get('/docs', (req, res) => {
    let db;
     db = db();
    let array = []
    db.collection('Contact').find()
    
        .then(()=>{
            res.status(200).json(array)

        })
        .then((err)=>{
            res.status(500).json({error: 'Could not fetch the requested file'})
        })
    
}),


    //return single document from the collection the database
        app.get('/Contact/id', (req, res)=>{
        let db;
        db = db();
        db.collection('Contact').findOne({_id: ObjectId(req.params.id)})

.then(doc => {
    res.status(200).json(doc)
}).catch( err=> {
    res.status(500).json({error: "Could not fetch the requested data"})
})
})

}