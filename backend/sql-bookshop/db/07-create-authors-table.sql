\c my_bookshop

CREATE TABLE authors(
    author_id SERIAL PRIMARY KEY,
    author VARCHAR(150) NOT NULL,
    author_funfact VARCHAR(500) NOT NULL
);