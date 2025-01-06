import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    input: '../api/src/swagger.json',
    output: {
      target: './src/http/generated/api.ts',
      mode: 'tags-split',
      client: 'react-query',
      baseUrl: 'http://localhost:3333',
      override: {
        query: {
          options: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchOnMount: false,
          },
        },
        mutator: {
          path: './src/services/api.ts',
          name: 'axiosInstance',
        },
      },
    },
  },
});
