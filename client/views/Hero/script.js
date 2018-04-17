import Debug from 'debug'
import readApplication from './methods/heroes/read'
import updateApplication from './methods/heroes/update'

export default {
  name: 'ui-hero',
  data: function () {
    return {
      service: {},
      store: {
        hero: false
      }
    }
  },
  beforeMount: function () {
    this.debug('beforeMount')
  },
  mounted: function () {
    this.debug('mounted')
    // services
    this.service.heroes = this.$root.$feathers.service('api/v1/heroes')
    // initializers
    this.readApplication(this.$route.params.uuid)
  },
  updated: function (event) {
    // this.debug('updated')
  },
  destroyed: function () {
    this.debug('destroyed')
  },
  methods: {
    debug: Debug('snapbook:ui-hero'),
    readApplication,
    updateApplication
  }
}
