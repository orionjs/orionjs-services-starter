import {route} from '@orion-js/http'

export default route({
  path: '/health-check',
  method: 'get',
  async resolve() {
    return {
      body: 'ok'
    }
  }
})
