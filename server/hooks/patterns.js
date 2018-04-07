module.exports = {
  before: {
    create (context) {
      const date = Date.now()
      context.data.name = 'Nouveau pattern'
      context.data.createdAt = date
      context.data.updatedAt = date
    },
    update (context) {
      const date = Date.now()
      context.data.updatedAt = date
    },
    remove (context) {
      const date = Date.now()
      return this.patch(context.id, { deletedAt: date }, context.params).then(message => {
        context.result = message
        return context
      })
    }
  }
}
