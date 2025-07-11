export const env = {
  apiUrl: process.env.API_URL || 'http://tasks:3000',
  port: parseInt(process.env.PORT || '3000'),
} as const;