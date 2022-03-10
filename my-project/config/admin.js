module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'de8345c05b3da23dc48d8507cc596caa'),
  },
});
