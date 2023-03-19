-- tis i the question tag with two foreign keys ie quetsionid and tagid and has two pk 
CREATE TABLE question_tag (
    questionId VARCHAR(255),
    tagId VARCHAR(255),
    PRIMARY KEY (questionId, tagId),
    FOREIGN KEY (questionId) REFERENCES question(id) ON DELETE CASCADE,
    FOREIGN KEY (tagId) REFERENCES tag(id) 
);