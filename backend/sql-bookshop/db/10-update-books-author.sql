\c my_bookshop

-- UPDATE books
-- SET author_id = (SELECT author_id FROM authors 
-- WHERE author = 'Douglas Adams', 'Antoine de Saint-Exupéry' 
-- AND title = 'The Hitchhiker''s Guide to the Galaxy', 'The Little Prince');


-- | title                                | author                   |
-- | ------------------------------------ | ------------------------ |
-- | The Hitchhiker's Guide to the Galaxy | Douglas Adams            |
-- | The Little Prince                    | Antoine de Saint-Exupéry |
-- | The Tale of Peter Rabbit             | Beatrix Potter           |
-- | Emma                                 | Jane Austen              |
-- | Nineteen Eighty-Four: A Novel        | George Orwell            |
-- | The Handmaid's Tale                  | Margaret Atwood          |
--The War of the Worlds                | H. G. Wells              |
-- | Pride and Prejudice                  | Jane Austen              |

UPDATE books
SET author_id = authors.author_id 
FROM authors
WHERE books.author_id = authors.author_id;

-- UPDATE books
-- SET author_id = (
--     SELECT author_id
--     FROM authors 
--     WHERE (author = 'Douglas Adams' AND title = 'The Hitchhiker''s Guide to the Galaxy')
--        OR (author = 'Antoine de Saint-Exupéry' AND title = 'The Little Prince')
--        OR (author = 'Beatrix Potter' AND title = 'The Tale of Peter Rabbit')
--        OR (author = 'Jane Austen' AND title = 'Emma')
--        OR (author = 'George Orwell' AND title = 'Nineteen Eighty-Four: A Novel')
--        OR (author = 'Margaret Atwood' AND title = 'The Handmaid''s Tale')
--        OR (author = 'H. G. Wells' AND title = 'The War of the Worlds')
--        OR (author = 'Jane Austen' AND title = 'Pride and Prejudice')
-- );

SELECT * FROM authors;
SELECT * FROM books;