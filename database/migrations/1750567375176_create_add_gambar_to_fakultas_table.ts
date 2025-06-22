import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'fakultas'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('gambar').nullable()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('gambar')
    })
  }
}