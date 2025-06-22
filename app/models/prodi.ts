import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Fakultas from '#models/fakultas'

export default class Prodi extends BaseModel {
  public static table = 'prodi'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nama: string

  @column({ columnName: 'fakultas_id' })
  declare fakultasId: number

  @belongsTo(() => Fakultas)
  declare fakultas: BelongsTo<typeof Fakultas>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}