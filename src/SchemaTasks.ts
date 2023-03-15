import { Config } from './Typings'
import * as SharedTasks from './SharedTasks'

/**
 * Generates the schema name, removing invalid values.
 *
 * @export
 * @param {string} name Schema name.
 * @returns
 */
export function generateSchemaName(name: string, config: Config): string {
  if (name == null) return name
  else {
    name = name.replace(/\W/g, '').replace(/^\d+/g, '')
    name = SharedTasks.convertCase(name, config.schemaNameCasing)
    return name
  }
}
