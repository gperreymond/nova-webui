export default async function (event, index) {
  let data = this.store.heroes.data[index]
  await this.service.heroes.update(data.id, data)
}
