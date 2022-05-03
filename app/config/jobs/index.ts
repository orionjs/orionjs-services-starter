import {startWorkers} from '@orion-js/dogs'
import jobs from 'app/controllers/jobs'

startWorkers({
  lockTime: 60 * 1000,
  workersCount: 5,
  jobs,
})
