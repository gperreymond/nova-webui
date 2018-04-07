export default async function (uuid) {
  this.debug('read application', uuid)
  this.store.application = await this.service.applications.get(uuid)
}
