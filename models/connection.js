const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;
console.log('MONGODB_URI:', uri); // Affiche l'URI pour vérifier qu'il est bien chargé depuis .env
const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      connectTimeoutMS: 2000,
    });

    console.info('Database connected');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};
connectDB(); // Appeler la fonction pour se connecter à la base de données
// module.exports = connectDB;
