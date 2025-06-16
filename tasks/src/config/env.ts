export const config = {
  port: parseInt(process.env.PORT!),
  db: {
    port: parseInt(process.env.DB_PORT!),
    name: process.env.DB_NAME!,
    host: process.env.DB_HOST!,
    password: process.env.DB_PASSWORD!,
    user: process.env.DB_USER!,
  },
};
