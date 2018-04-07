export default async function () {
  this.debug('create application')
  await this.service.applications.create({})
  this.listApplications()
}
