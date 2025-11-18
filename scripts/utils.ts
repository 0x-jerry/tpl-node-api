import { nitroExtractor, openapiPreset } from 'openapi-ts-define'
import { ROUTES_DIR } from '@/config'

export function generateOpenapiConfig() {
  const apiDir = ROUTES_DIR

  const result = openapiPreset({
    tsconfig: 'tsconfig.json',
    extractor: nitroExtractor({
      root: apiDir,
      files: ['**/*.ts', '!**/_*.ts'],
    }),
    openAPI: {
      info: {
        version: '1.0.0',
        title: 'test spec',
      },
    },
  })

  return result
}
