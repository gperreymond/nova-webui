export default async function (event, index) {
  let data = this.store.applications.data[index]
  await this.service.applications.update(data.id, data)
}
