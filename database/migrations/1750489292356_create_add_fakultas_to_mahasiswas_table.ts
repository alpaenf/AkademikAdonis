import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'mahasiswa'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('fakultas').nullable()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('fakultas')
    })
  }
}