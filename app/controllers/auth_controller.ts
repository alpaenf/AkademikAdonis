import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { inject } from '@adonisjs/core'
import Hash from '@adonisjs/core/services/hash'

@inject()
export default class AuthController {
  async showLogin({ view }: HttpContext) {
    return view.render('auth/login')
  }

  async login({ request, response, auth, session }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    try {
      const user = await User.findBy('email', email)
      if (!user) {
        throw new Error('User not found')
      }

      const isPasswordValid = await Hash.verify(user.password, password)
      if (!isPasswordValid) {
        throw new Error('Invalid password')
      }

      await auth.use('web').login(user)
      return response.redirect('/dashboard')
    } catch (error) {
      session.flash('error', 'Email atau password salah!')
      return response.redirect('/login')
    }
  }

  async showRegister({ view }: HttpContext) {
    return view.render('auth/register')
  }

  async register({ request, response, session }: HttpContext) {
    const { fullName, email, password } = request.only(['fullName', 'email', 'password'])

    const user = new User()
    user.fullName = fullName
    user.email = email
    user.password = password

    console.log('👉 Data sebelum simpan:', user)

    try {
    await user.save()
      console.log('✅ User berhasil disimpan ke DB')
      session.flash('success', 'Register berhasil! Silakan login.')
    } catch (error) {
      console.error('❌ Gagal simpan user:', error)
      session.flash('error', 'Terjadi kesalahan saat register.')
    }

    return response.redirect('/login')
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect('/login')
  }
}
