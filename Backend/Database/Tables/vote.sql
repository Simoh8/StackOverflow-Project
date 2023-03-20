-- this is the vote table with the questionId,answerId and users id as foreign keys 
USE Stack;

CREATE TABLE vote (
  id INT PRIMARY KEY,
  value INT NOT NULL,
  questionId VARCHAR(255),
  answerId VARCHAR(255),
  author VARCHAR(255),
  FOREIGN KEY (questionId) REFERENCES question(id) ,
  FOREIGN KEY (answerId) REFERENCES answer(id),
  FOREIGN KEY (author) REFERENCES users(id) ON DELETE CASCADE
);
uSE Stack;
select * from vote