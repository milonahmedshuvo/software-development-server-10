const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const port = 5000;
const course=require('./data/course.json')


app.get('/', (req, res)=>{
    res.send("Frist page server is runing")
})


app.get('/course', (req, res)=>{
    res.send(course)
})


app.get('/course/:id', (req, res)=>{
    const id=req.params.id;
    const idData=course.find((crs)=>crs.id ==id)
    res.send(idData)
})





app.listen(port, () => {
    console.log(`Server is runing ${port}`)
  })