import { Router } from "express";

const router = Router()

router.get('/', (req,res) => {
    res.render('login/ingreso')
})
router.get('/lista', (req,res) => {
    res.render('lista-usuarios', {title:'Lista Usuarios', nombre_del_css:'lista-usuarios'})
}) 

router.post('/', (req,res) => {
    res.send('Hola desde post /users')
})
router.put('/', (req,res) => {
    res.send('Hola desde put /users')
})
router.delete('/delete', (req,res) => {
    res.send('Hola desde delete /users')
})

export default router