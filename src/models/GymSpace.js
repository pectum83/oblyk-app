import ActiveData from '@/models/ActiveData'
import GymSpaceApi from '@/services/oblyk-api/gymSpaceApi'
import GymSector from '@/models/GymSector'
import GymRoute from '@/models/GymRoute'

export default class GymSpace extends ActiveData {
  find (gymId, spaceId) {
    return this.apiFind(GymSpaceApi, gymId, spaceId)
  }

  gymUrl (tabs = 'infos') {
    return `/gyms/${this.gym.id}/${this.gym.slug_name}/${tabs}`
  }

  url (tabs = 'plan') {
    return `${this.gymUrl('spaces')}/${this.id}/${this.slug_name}/${tabs}`
  }

  planUrl () {
    if (this.plan) {
      return `${process.env.VUE_APP_OBLYK_API_URL}${this.plan}`
    } else {
      return require('@/assets/gym-default-banner.jpg')
    }
  }

  get GymSectors () {
    const sectors = []
    if (!this.gym_sectors) return sectors

    for (const sector of this.gym_sectors) {
      sectors.push(new GymSector(sector))
    }
    return sectors
  }

  get GymRoutes () {
    const routes = []
    if (!this.gym_routes) return routes

    for (const route of this.gym_routes) {
      routes.push(new GymRoute(route))
    }
    return routes
  }
}
