db = db.getSiblingDB('database');

db.createUser({
  user: 'database',
  pwd: 'tm8Iw6XegXXYrVja',
  roles: ['readWrite'],
});
