-- PostgreSQL

CREATE table bike
    (
        id SERIAL PRIMARY KEY NOT NULL,
        contact BOOLEAN NOT NULL,
        email VARCHAR,
        model VARCHAR,
        name  VARCHAR,
        phone VARCHAR,
        purchase_date timestamp with time zone,
        purchase_price NUMERIC,
        serial_number  VARCHAR
    );
