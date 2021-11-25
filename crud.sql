--
-- TABLE: city
--

CREATE TABLE public.city (
    id integer NOT NULL,
    name character varying(100) NOT NULL
);

CREATE SEQUENCE public.city_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.city_id_seq OWNED BY public.city.id;

INSERT INTO public.city(name) VALUES('Bogota');
INSERT INTO public.city(name) VALUES('Cali');
INSERT INTO public.city(name) VALUES('Medellin');
INSERT INTO public.city(name) VALUES('Barranquilla');
INSERT INTO public.city(name) VALUES('Cartagena');
INSERT INTO public.city(name) VALUES('Soacha');
INSERT INTO public.city(name) VALUES('Cucuta');
INSERT INTO public.city(name) VALUES('Soledad');
INSERT INTO public.city(name) VALUES('Bucaramanga');
INSERT INTO public.city(name) VALUES('Bello');

--
-- TABLE: person
--

CREATE TABLE public.person (
    name character varying(50) NOT NULL,
    identification bigint NOT NULL,
    birth_date date NOT NULL,
    gender smallint NOT NULL,
    phone bigint,
    address character varying(100),
    id_profession integer NOT NULL,
    id_city integer NOT NULL,
    created_by integer NOT NULL,
    created_at date DEFAULT now(),
    lastname character varying(50) NOT NULL,
    id integer NOT NULL
);

CREATE SEQUENCE public.person_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.person_id_seq OWNED BY public.person.id;

--
-- TABLE: profession
--

CREATE TABLE public.profession (
    id integer NOT NULL,
    name character varying(100) NOT NULL
);

CREATE SEQUENCE public.profession_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.profession_id_seq OWNED BY public.profession.id;

INSERT INTO public.profession(name) VALUES('Docente');
INSERT INTO public.profession(name) VALUES('Ingeniero');
INSERT INTO public.profession(name) VALUES('Publicista');
INSERT INTO public.profession(name) VALUES('Abogado');
INSERT INTO public.profession(name) VALUES('Medico');
INSERT INTO public.profession(name) VALUES('Contador');

--
-- TABLE: user
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying(20) NOT NULL,
    password text NOT NULL
);

INSERT INTO public.user VALUES(1,'test@test.xxx',md5('Test123'))

--
-- Table: vehicle_brand
--

CREATE TABLE public.vehicle_brand (
    id integer NOT NULL,
    name character varying(100) NOT NULL
);

CREATE SEQUENCE public.vehicle_brand_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.vehicle_brand_id_seq OWNED BY public.vehicle_brand.id;

INSERT INTO public.vehicle_brand(name) VALUES('CHEVROLET');
INSERT INTO public.vehicle_brand(name) VALUES('MAZDA');
INSERT INTO public.vehicle_brand(name) VALUES('TOYOTA');
INSERT INTO public.vehicle_brand(name) VALUES('VOLKSWAGEN');
INSERT INTO public.vehicle_brand(name) VALUES('KIA');
INSERT INTO public.vehicle_brand(name) VALUES('HYUNDAI');
INSERT INTO public.vehicle_brand(name) VALUES('FIAT');
INSERT INTO public.vehicle_brand(name) VALUES('HONDA');
INSERT INTO public.vehicle_brand(name) VALUES('SUZUKI');
INSERT INTO public.vehicle_brand(name) VALUES('YAMAHA');
INSERT INTO public.vehicle_brand(name) VALUES('RENAULT');
INSERT INTO public.vehicle_brand(name) VALUES('SEAT');
INSERT INTO public.vehicle_brand(name) VALUES('FORD');

--
-- Table: vehicle_person
--

CREATE TABLE public.vehicle_person (
    id integer NOT NULL,
    id_person integer NOT NULL,
    id_vehicle_type integer NOT NULL,
    id_vehicle_brand integer NOT NULL,
    model integer NOT NULL,
    created_by integer NOT NULL,
    created_at date DEFAULT now()
);

CREATE SEQUENCE public.vehicle_person_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.vehicle_person_id_seq OWNED BY public.vehicle_person.id;

--
-- Table: vehicle_type
--

CREATE TABLE public.vehicle_type (
    id integer NOT NULL,
    name character varying(10) NOT NULL
);

CREATE SEQUENCE public.vehicle_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.vehicle_type_id_seq OWNED BY public.vehicle_type.id;

INSERT INTO public.vehicle_type(name) VALUES('Automovil');
INSERT INTO public.vehicle_type(name) VALUES('Camioneta');
INSERT INTO public.vehicle_type(name) VALUES('Moto');
INSERT INTO public.vehicle_type(name) VALUES('Bus');

--
-- SEQUENCES ASSIGN
--

ALTER TABLE ONLY public.city ALTER COLUMN id SET DEFAULT nextval('public.city_id_seq'::regclass);

ALTER TABLE ONLY public.person ALTER COLUMN id SET DEFAULT nextval('public.person_id_seq'::regclass);

ALTER TABLE ONLY public.profession ALTER COLUMN id SET DEFAULT nextval('public.profession_id_seq'::regclass);

ALTER TABLE ONLY public.vehicle_brand ALTER COLUMN id SET DEFAULT nextval('public.vehicle_brand_id_seq'::regclass);

ALTER TABLE ONLY public.vehicle_person ALTER COLUMN id SET DEFAULT nextval('public.vehicle_person_id_seq'::regclass);

ALTER TABLE ONLY public.vehicle_type ALTER COLUMN id SET DEFAULT nextval('public.vehicle_type_id_seq'::regclass);

ALTER TABLE ONLY public.city
    ADD CONSTRAINT city_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.profession
    ADD CONSTRAINT profession_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.vehicle_brand
    ADD CONSTRAINT vehicle_brand_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.vehicle_person
    ADD CONSTRAINT vehicle_person_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.vehicle_type
    ADD CONSTRAINT vehicle_type_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.person
    ADD CONSTRAINT fk_created_by FOREIGN KEY (created_by) REFERENCES public."user"(id);

ALTER TABLE ONLY public.vehicle_person
    ADD CONSTRAINT fk_created_by FOREIGN KEY (created_by) REFERENCES public."user"(id);

ALTER TABLE ONLY public.person
    ADD CONSTRAINT fk_id_city FOREIGN KEY (id_city) REFERENCES public.city(id);

ALTER TABLE ONLY public.vehicle_person
    ADD CONSTRAINT fk_id_person FOREIGN KEY (id_person) REFERENCES public.person(id);

ALTER TABLE ONLY public.person
    ADD CONSTRAINT fk_id_profession FOREIGN KEY (id_profession) REFERENCES public.profession(id);

ALTER TABLE ONLY public.vehicle_person
    ADD CONSTRAINT fk_id_vehicle_brand FOREIGN KEY (id_vehicle_brand) REFERENCES public.vehicle_brand(id);

ALTER TABLE ONLY public.vehicle_person
    ADD CONSTRAINT fk_id_vehicle_type FOREIGN KEY (id_vehicle_type) REFERENCES public.vehicle_type(id);