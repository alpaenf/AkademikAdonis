import type { HttpContext } from '@adonisjs/core/http'
import Mahasiswa from '#models/mahasiswa'
import Prodi from '#models/prodi'
import Fakultas from '#models/fakultas'
import { join } from 'node:path'
import { randomUUID } from 'node:crypto'

export default class MahasiswasController {
  async index({ view }: HttpContext) {
    const data = await Mahasiswa.query().orderBy('nim', 'asc')
    const prodi = await Prodi.query().preload('fakultas')
    const fakultas = await Fakultas.all()
    return view.render('mahasiswa/index', { data, prodi, fakultas })
  }

  async store({ request, response, session }: HttpContext) {
    const { nim, nama, email, prodi: prodiNama } = request.only(['nim', 'nama', 'email', 'prodi'])
    const foto = request.file('foto')
    let fotoPath = null
    
    // Check if NIM already exists
    const existingMahasiswa = await Mahasiswa.findBy('nim', nim)
    if (existingMahasiswa) {
      session.flash('error', `NIM ${nim} sudah terdaftar!`)
      return response.redirect().back()
    }
    
    // Handle photo upload
    if (foto) {
      if (foto.isValid) {
        const ext = foto.extname || 'jpg'
        const fileName = `${randomUUID()}.${ext}`
        const uploadPath = join(process.cwd(), 'public', 'uploads', 'mahasiswa')
        await foto.move(uploadPath, { name: fileName })
        fotoPath = `/uploads/mahasiswa/${fileName}`
      }
    }
    
    // Cari fakultas berdasarkan prodi yang dipilih
    const prodiData = await Prodi.query().where('nama', prodiNama).preload('fakultas').first()
    const fakultasNama = prodiData?.fakultas?.nama || ''
    
    await Mahasiswa.create({
      nim,
      nama,
      email,
      prodi: prodiNama,
      fakultas: fakultasNama,
      foto: fotoPath
    })
    
    session.flash('success', 'Mahasiswa berhasil ditambahkan!')
    return response.redirect().toRoute('dashboard.mahasiswa.index')
  }

  async update({ request, response, params, session }: HttpContext) {
    const mhs = await Mahasiswa.find(params.id)
    if (mhs) {
      const { nim, nama, email, prodi: prodiNama } = request.only(['nim', 'nama', 'email', 'prodi'])
      const foto = request.file('foto')
      let fotoPath = mhs.foto
      
      // Check if NIM already exists (excluding current record)
      const existingMahasiswa = await Mahasiswa.query()
        .where('nim', nim)
        .whereNot('id', params.id)
        .first()
      
      if (existingMahasiswa) {
        session.flash('error', `NIM ${nim} sudah terdaftar!`)
        return response.redirect().back()
      }
      
      // Handle photo upload
      if (foto) {
        if (foto.isValid) {
          const ext = foto.extname || 'jpg'
          const fileName = `${randomUUID()}.${ext}`
          const uploadPath = join(process.cwd(), 'public', 'uploads', 'mahasiswa')
          await foto.move(uploadPath, { name: fileName })
          fotoPath = `/uploads/mahasiswa/${fileName}`
        }
      }
      
      // Cari fakultas berdasarkan prodi yang dipilih
      const prodiData = await Prodi.query().where('nama', prodiNama).preload('fakultas').first()
      const fakultasNama = prodiData?.fakultas?.nama || ''
      
      mhs.merge({
        nim,
        nama,
        email,
        prodi: prodiNama,
        fakultas: fakultasNama,
        foto: fotoPath
      })
      await mhs.save()
      
      session.flash('success', 'Data mahasiswa berhasil diupdate!')
    }
    return response.redirect().toRoute('dashboard.mahasiswa.index')
  }

  async destroy({ params, response }: HttpContext) {
    const mhs = await Mahasiswa.find(params.id)
    if (mhs) await mhs.delete()
    return response.redirect().toRoute('dashboard.mahasiswa.index')
  }
}