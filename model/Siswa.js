import mongoose from 'mongoose'

const siswaSchema = new mongoose.Schema({
    nis: {
        type: String,
        unique: true,
        required: [true, "Isikan NIS terlebih dahulu"]
    },
    namalengkap: {
        type: String,
        unique: true,
        required: [true, "Isikan Nama Lengkap terlebih dahulu"]
    },
    namapanggilan: {
        type: String,
        unique: true,
        required: [true, "Isikan Nama Panggilan terlebih dahulu"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Isikan Email terlebih dahulu"],
        match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			"Isikan email valid",
		],
    },
    kelas: {
        type: String,
        required: [true, "Isikan Kelas terlebih dahulu"]
    },
    absen: {
        type: String,
        required: [true, "Isikan Nomor Absen terlebih dahulu"]
    },
    gender: {
        type: String,
        required: [true, "Isikan Gender terlebih dahulu"]
    },
})