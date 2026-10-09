\c my_bookshop;

CREATE TABLE books(
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    price_in_pence INT NOT NULL,
    quantity_in_stock INT NOT NULL,
    release_date DATE,
    is_fiction BOOLEAN NOT NULL
);
