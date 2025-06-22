// app/controllers/krs_controller.ts
import Krs from '#models/krs'
import Mahasiswa from '#models/mahasiswa'
import Matakuliah from '#models/matakuliah'
import type { HttpContext } from '@adonisjs/core/http'

export default class KrsController {
  async index({ view }: HttpContext) {
    const mahasiswa = await Mahasiswa.all()
    const matakuliah = await Matakuliah.all()
    const data = await Krs.query().preload('mahasiswa').preload('matakuliah')
    return view.render('krs/index', { mahasiswa, matakuliah, data })
  }

  async store({ request, response }: HttpContext) {
    await Krs.create(request.only(['mahasiswaId', 'matakuliahId', 'semester']))
    return response.redirect('/dashboard/krs')
  }

  async destroy({ params, response }: HttpContext) {
    const krs = await Krs.findOrFail(params.id)
    await krs.delete()
    return response.redirect('/dashboard/krs')
  }
}
