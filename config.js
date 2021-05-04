const db = {
  URI: `mongodb+srv://${process.env.DB_USER}:${encodeURIComponent(
    process.env.DB_PWD
  )}@${process.env.DB_CLUSTER_URL}/${
    process.env.DB_NAME
  }?retryWrites=true&w=majority`,
  options: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    autoIndex: true,
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  },
};

module.exports = {
  db,
};
