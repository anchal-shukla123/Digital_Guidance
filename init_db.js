// init_db.js
// const sqlite3 = require('sqlite3').verbose();
// const path = require('path');
// const dbPath = path.join(__dirname, 'eduguide.db');

// const db = new sqlite3.Database(dbPath);

// db.serialize(() => {
//   db.run(`
//     CREATE TABLE IF NOT EXISTS users (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       name TEXT NOT NULL,
//       email TEXT NOT NULL UNIQUE,
//       password_hash TEXT NOT NULL,
//       created_at TEXT
//     )
//   `, err => {
//     if (err) console.error('Error creating users table:', err);
//     else console.log('users table ready.');
//   });

//   // sample user (email: test@demo.com, password: password)
//   const bcrypt = require('bcryptjs');
//   const hash = bcrypt.hashSync('password', 10);

//   db.get('SELECT id FROM users WHERE email = ?', ['test@demo.com'], (err, row) => {
//     if (err) console.error(err);
//     if (!row) {
//       db.run('INSERT INTO users (name,email,password_hash,created_at) VALUES (?,?,?,datetime("now"))', ['Demo User','test@demo.com',hash], function(err) {
//         if (err) console.error(err);
//         else console.log('Inserted test user (test@demo.com / password).');
//       });
//     } else {
//       console.log('Test user already exists.');
//     }
//   });
// });

// db.close();
