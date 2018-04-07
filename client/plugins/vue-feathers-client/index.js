import io from 'socket.io-client'
import feathers from '@feathersjs/client'
import socketio from '@feathersjs/socketio-client'

function install (Vue, options) {
  Vue.mixin({
    beforeCreate () {
      if (this.$root.$feathers) { return false }
      const socket = io(window.location.origin, {
        transports: ['websocket'],
        forceNew: true
      })
      const client = feathers()
      client.configure(socketio(socket))
      this.$root.$feathers = client
    }
  })
}

export default install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}
