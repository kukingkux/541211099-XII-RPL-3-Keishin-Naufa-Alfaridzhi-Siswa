const express = require('express')
const router = express.Router()

const siswaController = require('../controllers/SiswaController')

router.get('/users', siswaController.index)
router.get('/user/:id', siswaController.show)
router.post('/users', siswaController.store)
router.put('/users', siswaController.update)
router.delete('/users', siswaController.delete)