export default async function (event, index) {
  let data = this.store.application
  await this.service.applications.update(data.id, data)
}
