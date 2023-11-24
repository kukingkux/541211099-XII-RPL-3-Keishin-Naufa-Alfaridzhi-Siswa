import siswas from "../model/Siswa.js"

module.exports = {
    index: (req, res) => {
        if(siswas.length > 0){
            res.json({
                status: true,
                data: siswas,
                method: req.method,
                url: req.url,
            })
        } else {
            res.json({
                status: false,
                message: "Data masih kosong"
            })
        }
    },
    index: (req, res) => {
        if(siswas.length > 0){
            res.json({
                status: true,
                data: siswas,
                method: req.method,
                url: req.url,
            })
        } else {
            res.json({
                status: false,
                message: "Data masih kosong"
            })
        }
    },
    store: (req, res) => {
        siswas.push(req.body)
            res.json({
                status: true,
                data: siswas,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan",
            })
        
    },
    update: (req, res) => {
        const nis  = req.params.nis
        users.filter()
    },
    index: (req, res) => {
        if(siswas.length > 0){
            res.json({
                status: true,
                data: siswas,
                method: req.method,
                url: req.url,
            })
        } else {
            res.json({
                status: false,
                message: "Data masih kosong"
            })
        }
    },
}