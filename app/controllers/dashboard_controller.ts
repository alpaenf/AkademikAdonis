import { HttpContext } from '@adonisjs/core/http'
import Mahasiswa from '#models/mahasiswa'
import Prodi from '#models/prodi'
import Fakultas from '#models/fakultas'
import Matakuliah from '#models/matakuliah'

export default class DashboardController {
  async index({ view }: HttpContext) {
    const totalMahasiswa = await Mahasiswa.query().count('* as total')
    const totalProdi = await Prodi.query().count('* as total')
    const totalFakultas = await Fakultas.query().count('* as total')
    const totalMatakuliah = await Matakuliah.query().count('* as total')

    // Fetch faculty data for gallery
    const fakultas = await Fakultas.query().orderBy('id', 'asc')

    return view.render('dashboard/index', {
      totalMahasiswa: totalMahasiswa[0].$extras.total,
      totalProdi: totalProdi[0].$extras.total,
      totalFakultas: totalFakultas[0].$extras.total,
      totalMatakuliah: totalMatakuliah[0].$extras.total,
      fakultas: fakultas,
    })
  }
}
