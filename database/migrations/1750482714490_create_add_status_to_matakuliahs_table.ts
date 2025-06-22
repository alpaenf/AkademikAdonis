import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'matakuliah'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('status').defaultTo('Aktif')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('status')
    })
  }
}