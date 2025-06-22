import type { HttpContext } from '@adonisjs/core/http'
import Matakuliah from '#models/matakuliah'

export default class MatakuliahsController {
  async index({ view }: HttpContext) {
    const data = await Matakuliah.all()
    return view.render('matakuliah/index', { data })
  }

  async store({ request, response }: HttpContext) {
    const body = request.only(['kode', 'nama_matakuliah', 'sks', 'dosen', 'semester', 'status'])
    await Matakuliah.create(body)
    return response.redirect().toRoute('dashboard.matakuliah.index')
  }

  async update({ params, request, response }: HttpContext) {
    const matkul = await Matakuliah.findOrFail(params.id)
    const body = request.only(['kode', 'nama_matakuliah', 'sks', 'dosen', 'semester', 'status'])
    matkul.merge(body)
    await matkul.save()
    return response.redirect().toRoute('dashboard.matakuliah.index')
  }

  async destroy({ params, response }: HttpContext) {
    const matkul = await Matakuliah.findOrFail(params.id)
    await matkul.delete()
    return response.redirect().toRoute('dashboard.matakuliah.index')
  }
}