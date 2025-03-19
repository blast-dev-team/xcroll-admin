const path = require('path');
const orvalPath = '../../src/api/orval/';

module.exports = {
  'api-file': {
    input: {
      target: './openapi.yaml',
      baseUrl: '',
    },
    output: {
      mode: 'split',
      target: './src/api/orval/endpoints',
      schemas: './src/api/orval/model',
      client: 'react-query',
      override: {
        mutator: {
          path: path.join(orvalPath, '..', 'instance.ts'),
          name: 'axiosInstance',
        },
      },
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
};
