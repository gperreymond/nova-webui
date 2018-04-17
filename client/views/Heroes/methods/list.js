export default async function () {
  this.debug('list heroes')
  this.store.heroes = await this.service.heroes.find()
  console.log(this.store.heroes)
}
