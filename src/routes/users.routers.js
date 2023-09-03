import { Router } from "express";

const router = Router()

router.get('/', (req,res) => {
    res.render('login/ingreso')
})
router.get('/registro', (req,res) => {
    res.render('login/registro')
}) 

router.post('/', (req,res) => {
    res.send('Hola desde post /users')
})
router.put('/', (req,res) => {
    res.send('Hola desde put /users')
})
router.delete('/', (req,res) => {
    res.send('Hola desde delete /users')
})

export default router