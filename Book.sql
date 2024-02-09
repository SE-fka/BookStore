--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:JAqolQTxEW0gIpTIPe1T+g==$1LwzopdTFvct/TYBvqSpk5HWa5UrHP0KnAG6O1jir/c=:9+WwTx//Uz9f7CMN2Nsy+U/obHVLgA5RMUcKGA7i0mc=';

--
-- User Configurations
--








--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- PostgreSQL database dump complete
--

--
-- Database "Book" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: Book; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "Book" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';


ALTER DATABASE "Book" OWNER TO postgres;

\connect "Book"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: bookorder; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bookorder (
    order_id integer NOT NULL,
    title text,
    writer text,
    image text,
    price numeric,
    tag text
);


ALTER TABLE public.bookorder OWNER TO postgres;

--
-- Name: Order_order_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.bookorder ALTER COLUMN order_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Order_order_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: book; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.book (
    book_id integer NOT NULL,
    title text,
    writer text,
    image text,
    price integer,
    tag text
);


ALTER TABLE public.book OWNER TO postgres;

--
-- Name: book_book_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.book ALTER COLUMN book_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.book_book_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: book; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.book (book_id, title, writer, image, price, tag) FROM stdin;
3	Things Fall Apart	Chinua Achebe	https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg	100	essay
4	The Book Of Job	Samuel Beckett	https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg	100	fiction
5	The Book Of Job	Samuel Beckett	https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg	100	fiction
6	The Book Of Job	Samuel Beckett	https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg	100	non-fiction
1	Android  Second Edition	W. Frank Ableson	https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg	100	science
2	Android 3rd Edition	W. Frank Ableson	https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg	100	science
7	Agile Web Development	Sam Ruby	https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg	100	science
8	Web Development	Ruby Sam	https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg	100	science
\.


--
-- Data for Name: bookorder; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bookorder (order_id, title, writer, image, price, tag) FROM stdin;
6	Android 3rd Edition	W. Frank Ableson	https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg	100	science
7	Web Development	Ruby Sam	https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg	100	science
\.


--
-- Name: Order_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Order_order_id_seq"', 9, true);


--
-- Name: book_book_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.book_book_id_seq', 10, true);


--
-- Name: bookorder Order_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bookorder
    ADD CONSTRAINT "Order_pkey" PRIMARY KEY (order_id);


--
-- Name: book book_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book
    ADD CONSTRAINT book_pkey PRIMARY KEY (book_id);


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

