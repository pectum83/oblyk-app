import ActiveData from '@/models/ActiveData'
import WordApi from '@/services/oblyk-api/WordApi'

export default class Word extends ActiveData {
  find (id) {
    return this.apiFind(WordApi, id)
  }

  path (page = 'infos') {
    return `/words/${this.id}/${this.slug_name}/${page}`
  }

  glossaryPath () {
    return '/glossary'
  }
}
