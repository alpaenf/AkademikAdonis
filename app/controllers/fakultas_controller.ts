import Fakultas from '#models/fakultas'
import { HttpContext } from '@adonisjs/core/http'
import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { randomUUID } from 'node:crypto'

export default class FakultasController {
  async index({ view }: HttpContext) {
    const data = await Fakultas.query().orderBy('id', 'asc')
    return view.render('fakultas/index', { data })
  }

  async store({ request, response }: HttpContext) {
    const nama = request.input('nama')
    const gambar = request.file('gambar')
    
    let gambarPath = null
    
    if (gambar) {
      if (!gambar.isValid) {
        return response.redirect('/dashboard/fakultas')
      }
      
      const ext = gambar.extname || 'jpg'
      const fileName = `${randomUUID()}.${ext}`
      const uploadPath = join(process.cwd(), 'public', 'uploads', 'fakultas')
      
      try {
        await gambar.move(uploadPath, { name: fileName })
        gambarPath = `/uploads/fakultas/${fileName}`
      } catch (error) {
        console.error('Error uploading file:', error)
      }
    }
    
    await Fakultas.create({ nama, gambar: gambarPath })
    return response.redirect('/dashboard/fakultas')
  }

  async destroy({ params, response }: HttpContext) {
    const fakultas = await Fakultas.findOrFail(params.id)
    await fakultas.delete()
    return response.redirect('/dashboard/fakultas')
  }

  async update({ params, request, response }: HttpContext) {
    const fakultas = await Fakultas.findOrFail(params.id)
    const nama = request.input('nama')
    const gambar = request.file('gambar')
    
    let gambarPath = fakultas.gambar
    
    if (gambar) {
      if (!gambar.isValid) {
        return response.redirect('/dashboard/fakultas')
      }
      
      const ext = gambar.extname || 'jpg'
      const fileName = `${randomUUID()}.${ext}`
      const uploadPath = join(process.cwd(), 'public', 'uploads', 'fakultas')
      
      try {
        await gambar.move(uploadPath, { name: fileName })
        gambarPath = `/uploads/fakultas/${fileName}`
      } catch (error) {
        console.error('Error uploading file:', error)
      }
    }
    
    fakultas.nama = nama
    fakultas.gambar = gambarPath
    await fakultas.save()
    return response.redirect('/dashboard/fakultas')
  }
}
