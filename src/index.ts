import { User } from './models/User';

const collection = User.builduserCollection();

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
