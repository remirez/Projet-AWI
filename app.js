import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv/config'
import posts from './routes/posts'
import commentaires from './routes/commentaires'
import utilisateurs from './routes/utilisateurs'

const app = express();

//Middleware - Util
app.use(cors())
app.use(bodyParser.json())

//Middleware - Routes
app.use('/posts', posts)
app.use('/commentaires', commentaires)
app.use('/utilisateurs', utilisateurs)

//Home
app.get('/', (req, res) => {
})

mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true }, () => console.log('connected to db'));

app.listen(100); 