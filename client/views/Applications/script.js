import Debug from 'debug'
import listApplications from './methods/list'
import createApplication from './methods/create'
import updateApplication from './methods/update'
import deleteApplication from './methods/delete'

export default {
  name: 'ui-applications',
  data: function () {
    return {
      service: {},
      store: {
        applications: false
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
    this.listApplications()
  },
  updated: function (event) {
    // this.debug('updated')
  },
  destroyed: function () {
    this.debug('destroyed')
  },
  methods: {
    debug: Debug('snapbook:ui-applications'),
    listApplications,
    createApplication,
    updateApplication,
    deleteApplication
  }
}
