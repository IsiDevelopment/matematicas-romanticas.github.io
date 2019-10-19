
create table permiso(
  id int auto_increment primary key not null,
  clave varchar(100) unique not null,
  descripcion varchar(100),
  fecha_alta timestamp default current_timestamp
);

create table usuario(
  id int auto_increment primary key not null,
  nombre varchar(50),
  primer_apellido varchar(50),
  segundo_apellido varchar(50),
  email varchar(100),
  usuario varchar(50) unique,
  contrasena varchar(255) not null,
  permiso_id int not null,
  fecha_alta timestamp default current_timestamp,
  ultimo_acceso date not null,
  activo int not null default 1,
  acceso int not null default 0,
  telefono varchar(100),
  fecha_nacimiento datetime,
  foreign key(permiso_id)
    references permiso(id)
);

create table rubro(
  id int auto_increment primary key not null,
  descripcion varchar(100) not null,
  clave varchar(100) unique not null,
  imagen varchar(100),
  rutaImagen varchar(1500),
  tipoImagen varchar(100)
);

create table um(
  id int auto_increment primary key not null,
  descripcion varchar(500),
  simbolo varchar(100) unique not null
);

create table status(
  id int auto_increment primary key not null,
  descripcion varchar(500) not null,
  clave varchar(100) unique not null
);

create table articulo(
  id int auto_increment primary key not null,
  descripcion varchar(500) not null,
  detalle varchar(15000) not null,
  clave varchar(50) unique not null,
  rubro_id int not null,
  um_id int not null,
  precio float(10,2) not null,
  imagen varchar(100),
  rutaImagen varchar(1500),
  tipoImagen varchar(100),
  stock int not null,
  fecha_alta timestamp default current_timestamp,
  estatus_id int not null,
  imagen varchar(500),
  foreign key(rubro_id)
    references rubro(id),
  foreign key(um_id)
    references um(id),
  foreign key(estatus_id)
    references status(id)
);

create table ventas(
  id int auto_increment primary key not null,
  usuario_id int not null,
  fecha_venta timestamp default current_timestamp,
  cantidad float(10, 2),
  total float(10, 2),
  paga_con float(10, 2),
  devuelto float(10, 2),
  foreign key(usuario_id)
    references usuario(id)
);

create table mov_ventas(
  id int auto_increment primary key not null,
  articulo_id int not null,
  venta_id int not null,
  precio int not null,
  cantidad float(10, 2),
  importe float(10, 2),
  foreign key(venta_id)
    references ventas(id),
  foreign key(articulo_id)
    references articulo(id)
);
drop table mov_ventas
