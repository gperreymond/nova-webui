export default async function () {
  this.debug('list applications')
  this.store.applications = await this.service.applications.find()
}
