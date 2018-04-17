export default async function () {
  this.debug('create hero')
  await this.service.heroes.create({})
  this.listApplications()
}
