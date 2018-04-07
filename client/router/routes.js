import Applications from '@/views/Applications'
import Application from '@/views/Application'

export default [{
  path: '/applications',
  name: 'applications',
  component: Applications
}, {
  path: '/applications/:uuid',
  name: 'application',
  component: Application
}]
