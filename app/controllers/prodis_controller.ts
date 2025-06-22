import { HttpContext } from '@adonisjs/core/http'
import Prodi from '#models/prodi'
import Fakultas from '#models/fakultas'

export default class ProdisController {
  async index({ view }: HttpContext) {
    const fakultas = await Fakultas.all()
    const prodis = await Prodi.query().preload('fakultas')
    return view.render('prodi/index', { data: prodis, fakultas })
  }

  async store({ request, response }: HttpContext) {
    const { nama, fakultas_id } = request.only(['nama', 'fakultas_id'])
    await Prodi.create({ nama, fakultasId: fakultas_id })
    return response.redirect().toRoute('dashboard.prodi.index')
  }

  async update({ params, request, response }: HttpContext) {
    const prodi = await Prodi.findOrFail(params.id)
    const { nama, fakultas_id } = request.only(['nama', 'fakultas_id'])
    prodi.merge({ nama, fakultasId: fakultas_id })
    await prodi.save()
    return response.redirect().toRoute('dashboard.prodi.index')
  }

  async destroy({ params, response }: HttpContext) {
    const prodi = await Prodi.findOrFail(params.id)
    await prodi.delete()
    return response.redirect().toRoute('dashboard.prodi.index')
  }
}
