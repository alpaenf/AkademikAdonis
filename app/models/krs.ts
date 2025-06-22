import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Mahasiswa from './mahasiswa.js'
import Matakuliah from './matakuliah.js'

export default class Krs extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'mahasiswa_id' })
  declare mahasiswaId: number

  @column({ columnName: 'matakuliah_id' })
  declare matakuliahId: number

  @column()
  declare semester: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Mahasiswa, { foreignKey: 'mahasiswaId' })
  public mahasiswa: any

  @belongsTo(() => Matakuliah, { foreignKey: 'matakuliahId' })
  public matakuliah: any
}
