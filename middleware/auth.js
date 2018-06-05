// Authentication middleware

module.exports = (req, res, next) => {
  console.log('auth');
  return next();
}