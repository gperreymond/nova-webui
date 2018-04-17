export default async function (event, index) {
  let data = this.store.hero
  await this.service.heroes.update(data.id, data)
}
