import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    await User.create({
      email: 'admin@example.com',
      password: 'password123',
      fullName: 'Administrator'
    })
  }
}