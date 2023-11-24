import express from 'express';
const router = express.Router()

const siswaController = require('../controllers/SiswaController')

router.get('/siswas', siswaController.index)
router.get('/siswa/:nis', siswaController.show)
router.post('/siswa', siswaController.store)
router.put('/siswa/:nis', siswaController.update)
router.delete('/siswa/:nis', siswaController.delete)