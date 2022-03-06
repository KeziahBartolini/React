module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dfb46b680f1626a39d9449185212a683'),
  },
});
