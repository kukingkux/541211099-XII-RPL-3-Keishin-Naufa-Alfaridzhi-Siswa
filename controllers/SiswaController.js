import siswas from "../model/Siswa.js"

export default {

    // Menampilkan semua data siswa
    index: async (req, res) => {
        try {
            const siswa = await siswas.find()
            if(siswa.length > 0){
                res.status(200).json({
                    status: true,
                    data: siswa,
                    method: req.method,
                    url: req.url,
                })
            } else {
                res.json({
                    status: false,
                    message: "Data masih kosong"
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
               
            })
        }
    },

    // Menampilkan data siswa
    show: async (req, res) => {
        try {
            const siswa = await siswas.find({ nis: req.params.nis }).exec() // Menampilkan data siswa berdasarkan NIS
            res.status(200).json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                
            })
        }
    },

    // Membuat data siswa baru
    store: async (req, res) => {
        try {
            const siswa = await siswas.create(req.body)
            res.status(200).json({
                status: true,
                data: siswa,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan",
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                
            })
        }
    },

    // Update data siswa
    update: async (req, res) => {
        try {
        
        const siswa = await siswas.updateOne(
            {nis: req.params.nis}, // Update data suswa berdasarkan NIS
            req.body, {
                new: true,
                runValidators: true
            }
        ) // 
        res.json({
            status: true,
            data: siswa,
            method: req.method,
            url: req.url,
            message: "Data berhasil diupdate"
        })
        } catch (error) {
            res.status(400).json({
                status: false,
               
            })
        }
    },

    // Menghapus data siswa
    destroy: async (req, res) => {
        try {
           await siswas.deleteOne({ nis: req.params.nis})  // Update data suswa berdasarkan NIS
           res.json({
            status: true,
            method: req.method,
            url: req.url,
            message: "Data berhasil dihapus"
           })
        } catch (error) {
            res.status(400).json({
                status: false,
               
            })
        }
    },
}