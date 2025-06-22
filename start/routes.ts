import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const authController = () => import('#controllers/auth_controller')
const dashboardController = () => import('#controllers/dashboard_controller')
const mahasiswasController = () => import('#controllers/mahasiswas_controller')
const prodisController = () => import('#controllers/prodis_controller')
const fakultasController = () => import('#controllers/fakultas_controller')
const matakuliahsController = () => import('#controllers/matakuliahs_controller')
const krsController = () => import('#controllers/KrsController')
const dashboardApisController = () => import('#controllers/dashboard_apis_controller')
const profileController = () => import('#controllers/profile_controller')

router
  .group(() => {
    router.get('login', [authController, 'showLogin']).as('login.show')
    router.post('login', [authController, 'login']).as('login.perform')
    router.get('register', [authController, 'showRegister']).as('register.show')
    router.post('register', [authController, 'register']).as('register.perform')
  })
  .use(middleware.guest())

router.post('logout', [authController, 'logout']).as('logout')

router
  .group(() => {
    router.get('/', [dashboardController, 'index']).as('index')
    
    // Profile routes
    router.get('/profile', [profileController, 'index']).as('profile.index')
    router.put('/profile', [profileController, 'update']).as('profile.update')
    router.post('/profile/update', [profileController, 'update']).as('profile.update.post')
    router.delete('/profile', [profileController, 'delete']).as('profile.delete')
    
    router
      .group(() => {
        router.get('/', [mahasiswasController, 'index']).as('index')
        router.post('/', [mahasiswasController, 'store']).as('store')
        router.post('/:id', [mahasiswasController, 'update']).as('update.direct')
        router.post('/:id/update', [mahasiswasController, 'update']).as('update.post')
        router.post('/:id/edit', [mahasiswasController, 'update']).as('update.edit')
        router.put('/:id', [mahasiswasController, 'update']).as('update')
        router.post('/:id/delete', [mahasiswasController, 'destroy']).as('destroy.post')
        router.delete('/:id', [mahasiswasController, 'destroy']).as('destroy')
      })
      .prefix('mahasiswa')
      .as('mahasiswa')

    router
      .group(() => {
        router.get('/', [prodisController, 'index']).as('index')
        router.post('/', [prodisController, 'store']).as('store')
        router.post('/:id/update', [prodisController, 'update']).as('update.post')
        router.put('/:id', [prodisController, 'update']).as('update')
        router.post('/:id/delete', [prodisController, 'destroy']).as('destroy.post')
        router.delete('/:id', [prodisController, 'destroy']).as('destroy')
      })
      .prefix('prodi')
      .as('prodi')

    router
      .group(() => {
        router.get('/', [fakultasController, 'index']).as('index')
        router.post('/', [fakultasController, 'store']).as('store')
        router.post('/:id/update', [fakultasController, 'update']).as('update.post')
        router.put('/:id', [fakultasController, 'update']).as('update')
        router.post('/:id/delete', [fakultasController, 'destroy']).as('destroy.post')
        router.delete('/:id', [fakultasController, 'destroy']).as('destroy')
      })
      .prefix('fakultas')
      .as('fakultas')

    router
      .group(() => {
        router.get('/', [matakuliahsController, 'index']).as('index')
        router.post('/', [matakuliahsController, 'store']).as('store')
        router.post('/:id/update', [matakuliahsController, 'update']).as('update.post')
        router.put('/:id', [matakuliahsController, 'update']).as('update')
        router.post('/:id/delete', [matakuliahsController, 'destroy']).as('destroy.post')
        router.delete('/:id', [matakuliahsController, 'destroy']).as('destroy')
      })
      .prefix('matakuliah')
      .as('matakuliah')

    router
      .group(() => {
        router.get('/', [krsController, 'index']).as('index')
        router.post('/', [krsController, 'store']).as('store')
        router.delete('/:id', [krsController, 'destroy']).as('destroy')
        router.post('/:id/delete', [krsController, 'destroy']).as('destroy.post')
      })
      .prefix('krs')
      .as('krs')
  })
  .prefix('dashboard')
  .as('dashboard')
  .use(middleware.auth())

router.get('/', ({ response }) => response.redirect().toRoute('dashboard.index'))

router.get('/api/dashboard-stats', [dashboardApisController, 'stats'])

