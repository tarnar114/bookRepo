CREATE TABLE IF NOT EXISTS public.books
(
    book_id SERIAL,
    book_name character varying(255) NOT NULL,
    book_genre character varying(50) NOT NULL,
    book_author character varying(50) NOT NULL,
    book_publisher character varying(50) NOT NULL,
    CONSTRAINT unique_name UNIQUE (book_name)
);

INSERT into books(book_name,book_genre,book_author,book_publisher) VALUES ('hello','hello','hello','hello');