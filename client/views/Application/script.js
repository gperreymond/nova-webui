import Debug from 'debug'
import readApplication from './methods/applications/read'
import updateApplication from './methods/applications/update'
import listPatterns from './methods/patterns/list'
import createPattern from './methods/patterns/create'

export default {
  name: 'ui-application',
  data: function () {
    return {
      service: {},
      store: {
        application: false,
        patterns: false
      }
    }
  },
  beforeMount: function () {
    this.debug('beforeMount')
  },
  mounted: function () {
    this.debug('mounted')
    // services
    this.service.applications = this.$root.$feathers.service('api/v2/applications')
    this.service.patterns = this.$root.$feathers.service('api/v2/patterns')
    // initializers
    this.readApplication(this.$route.params.uuid)
    this.listPatterns(this.$route.params.uuid)
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
    updateApplication,
    listPatterns,
    createPattern
  }
}
