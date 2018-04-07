export default async function () {
  this.debug('list patterns')
  this.store.patterns = await this.service.patterns.find({application: this.store.application.id})
}
