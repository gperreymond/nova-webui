import Debug from 'debug'
import listHeroes from './methods/list'
import createHero from './methods/create'
import updateHero from './methods/update'
import deleteHero from './methods/delete'

export default {
  name: 'ui-heroes',
  data: function () {
    return {
      service: {},
      store: {
        heroes: false
      }
    }
  },
  beforeMount: function () {
    this.debug('beforeMount')
  },
  mounted: function () {
    this.debug('mounted')
    // services
    this.service.heroes = this.$root.$feathers.service('api/heroes')
    // initializers
    this.listHeroes()
  },
  updated: function (event) {
    // this.debug('updated')
  },
  destroyed: function () {
    this.debug('destroyed')
  },
  methods: {
    debug: Debug('snapbook:ui-heroes'),
    listHeroes,
    createHero,
    updateHero,
    deleteHero
  }
}
