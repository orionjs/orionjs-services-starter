import {JobsDefinition, startWorkers} from '@orion-js/dogs'

export default function startJobs(jobs: JobsDefinition) {
  startWorkers({
    lockTime: 60 * 1000,
    workersCount: 5,
    jobs,
  })
}
