import {getMongoConnection} from '@orion-js/mongodb'

export async function checkDB() {
  const connection = getMongoConnection({name: 'main'})
  await connection.connectionPromise

  // check mongodb connection status
  const status = await connection.db.admin().serverStatus()
  if (status.ok !== 1) {
    throw new Error('MongoDB connection is not ok')
  }
}
