import { HttpContext } from '@adonisjs/core/http'
import Mahasiswa from '#models/mahasiswa'
import Prodi from '#models/prodi'
import Fakultas from '#models/fakultas'
import Matakuliah from '#models/matakuliah'

export default class DashboardApisController {
  async stats({ response }: HttpContext) {
    const totalMahasiswa = await Mahasiswa.query().count('* as total')
    const totalProdi = await Prodi.query().count('* as total')
    const totalFakultas = await Fakultas.query().count('* as total')
    const totalMatakuliah = await Matakuliah.query().count('* as total')

    return response.json({
      totalMahasiswa: totalMahasiswa[0].$extras.total,
      totalProdi: totalProdi[0].$extras.total,
      totalFakultas: totalFakultas[0].$extras.total,
      totalMatakuliah: totalMatakuliah[0].$extras.total,
    })
  }
}