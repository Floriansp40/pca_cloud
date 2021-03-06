/***********************************/
/*** Import des module nécessaires */
const express = require('express')
const userCtrl = require('../controller/user')

/***************************************/
/*** Récupération du routeur d'express */
let router = express.Router()

/*********************************************/
/*** Middleware pour logger dates de requete */
router.use( (req, res, next) => {
    const event = new Date()
    console.log('User Time:', event.toString())
    next()
})


/**********************************/
/*** Routage de la ressource User */

router.get('/', userCtrl.getAllUsers)

router.get('/:id', userCtrl.getUser)

router.patch('/:id', userCtrl.updateUser)
    
router.delete('/:id', userCtrl.deleteUser)

module.exports = router