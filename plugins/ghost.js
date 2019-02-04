import GhostContentApi from '@tryghost/content-api'

const api = new GhostContentApi({
  host: 'https://ghost.itcrudes.com',
  key: '00399f1d4968005c55d2324e0d',
  version: 'v2'
})

export default {
  // Get all posts
  getAllPosts() {
    return api.posts.browse({ include: 'tags,authors' })
  },
  getAllTags() {
    return api.tags.browse()
  },
  getPost(params) {
    return api.posts.read(params)
  }
}
