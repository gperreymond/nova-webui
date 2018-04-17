import Heroes from '@/views/Heroes'
import Hero from '@/views/Hero'

export default [{
  path: '/heroes',
  name: 'heroes',
  component: Heroes
}, {
  path: '/heroes/:uuid',
  name: 'hero',
  component: Hero
}]
