import {Collection, MongoCollection, Repository} from '@orion-js/mongodb'
import {ExampleId, ExampleSchema, ExampleType} from 'app/exampleComponent/schemas/ExampleSchema'

@Repository()
export class ExampleRepository {
  @MongoCollection({
    name: 'examples',
    schema: ExampleSchema,
    indexes: [
      {
        keys: {
          name: 1,
        },
      },
    ],
  })
  private exampleCollection: Collection<ExampleType>

  async getExampleById(id: ExampleId): Promise<ExampleType> {
    return await this.exampleCollection.findOne({_id: id})
  }

  async getAllExamples(): Promise<ExampleType[]> {
    return await this.exampleCollection.find().sort({createdAt: -1}).toArray()
  }

  async createExample(name: string): Promise<string> {
    return await this.exampleCollection.insertOne({name, createdAt: new Date()})
  }
}
