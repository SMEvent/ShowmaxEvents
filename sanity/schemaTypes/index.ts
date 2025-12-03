import { type SchemaTypeDefinition } from 'sanity'
import equipment from '../schemas/equipment'
import portfolio from '../schemas/portfolio'
import blog from '../schemas/blog'
import page from '../schemas/page'
import settings from '../schemas/settings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [equipment, portfolio, blog, page, settings],
}
