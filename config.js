module.exports = {
    // MongoDB connection URI
    mongoURI: 'mongodb://localhost:27017/school_management',
  
    // Port for the Express server
    port: process.env.PORT || 3000,
  
    // JWT secret key for authentication (example)
    jwtSecret: 'your_jwt_secret',
  
    // Any other configuration variables
  };
  