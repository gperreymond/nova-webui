export default async function (event, index) {
  this.debug('delete application')
  let data = this.store.applications.data[index]
  await this.service.applications.remove(data.id)
  this.listApplications()
}
