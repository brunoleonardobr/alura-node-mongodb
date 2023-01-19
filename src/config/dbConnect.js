import mongoose from 'mongoose';

mongoose.connect(`stringConnection`);

let db = mongoose.connection;

export default db;