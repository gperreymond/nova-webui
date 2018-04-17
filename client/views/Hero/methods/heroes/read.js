export default async function (uuid) {
  this.debug('read hero', uuid)
  this.store.hero = await this.service.heroes.get(uuid)
}
