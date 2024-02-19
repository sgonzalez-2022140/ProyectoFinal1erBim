'use strict'

//importamos express y sus confs
import express from 'express'
import { config } from "dotenv"

//exportamos métodos
import categoryRoutes from "../src/category/category.routes.js"
import productRotes from "../src/products/product.routes.js"
import userRoutes from '../src/user/user.routes.js'

//express confs
const app = express()
config();
const port = process.env.PORT || 3056

app.use(express.urlencoded({extended: false}))
app.use(express.json())

//declarar las rutas
app.use(categoryRoutes)
app.use('/product', productRotes)
app.use(userRoutes)


export const initServer = ()=>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}