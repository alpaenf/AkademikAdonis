import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Mahasiswa extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nim: string

  @column()
  declare nama: string

  @column()
  declare email: string

  @column()
  declare prodi: string

  @column()
  declare fakultas: string

  @column()
  declare foto: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  public static table = 'mahasiswa'
}