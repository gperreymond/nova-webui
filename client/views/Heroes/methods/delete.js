export default async function (event, index) {
  this.debug('delete hero')
  let data = this.store.heroes.data[index]
  await this.service.heroes.remove(data.id)
  this.listApplications()
}
