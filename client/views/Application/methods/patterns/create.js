export default async function () {
  this.debug('create pattern')
  await this.service.patterns.create({
    application: this.store.application.id
  })
}
