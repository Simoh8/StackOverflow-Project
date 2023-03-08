CREATE TABLE questions (
  id INT PRIMARY KEY NOT NULL ,
  title VARCHAR(255) NOT NULL,
  body VARCHAR (1000) NOT NULL,
  user_id INT FOREIGN KEY (user_id) REFERENCES users(id) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
);
