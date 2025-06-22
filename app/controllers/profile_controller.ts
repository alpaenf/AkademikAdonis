import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class ProfileController {
  async index({ view, auth }: HttpContext) {
    const user = auth.user!
    return view.render('profile/index', { user })
  }

  async update({ request, response, auth, session }: HttpContext) {
    const user = auth.user!
    
    // Update user data
    user.fullName = request.input('fullName')
    user.email = request.input('email')
    
    // Only update password if provided
    if (request.input('password')) {
      user.password = request.input('password')
    }
    
    await user.save()
    
    session.flash('success', 'Profile berhasil diperbarui!')
    return response.redirect().back()
  }

  async delete({ response, auth, session }: HttpContext) {
    const user = auth.user!
    await user.delete()
    
    // Logout after account deletion
    await auth.use('web').logout()
    
    session.flash('success', 'Akun berhasil dihapus!')
    return response.redirect().toRoute('login.show')
  }
} 