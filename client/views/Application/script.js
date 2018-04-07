import Debug from 'debug'
import readApplication from './methods/applications/read'
import updateApplication from './methods/applications/update'

export default {
  name: 'ui-application',
  data: function () {
    return {
      service: {},
      store: {
        application: false
      }
    }
  },
  beforeMount: function () {
    this.debug('beforeMount')
  },
  mounted: function () {
    this.debug('mounted')
    // services
    this.service.applications = this.$root.$feathers.service('api/v1/applications')
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
    debug: Debug('snapbook:ui-application'),
    readApplication,
    updateApplication
  }
}
