import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Matakuliah extends BaseModel {
  public static table = 'matakuliah'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare kode: string

  @column()
  declare nama_matakuliah: string

  @column()
  declare sks: number

  @column()
  declare dosen: string

  @column()
  declare semester: number

  @column()
  declare status: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}