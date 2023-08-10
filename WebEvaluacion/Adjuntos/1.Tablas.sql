use master
go

create database proyectomoventi
go

use proyectomoventi
go

-- ######################
-- ### CREAMOS TABLAS ###
-- ######################
GO

-- SEDES 
CREATE TABLE Sedes
(
	idSede						int identity not null,
	nombreSede					varchar(255) not null,
	numeroComplejos				int not null,
	presupuestoAproximado		decimal(14,4) not null,
	constraint		pk_idSede_se		primary key(idSede),
	constraint		uk_nombreSede_se	unique(nombreSede)
);

-- TIPO COMPLEJOS
CREATE TABLE TipoComplejos
(
	idTipoComplejo			int identity not null,
	nombreTipoComplejo		varchar(255) not null,
	constraint				pk_idTipoComplejo_tc		primary key(idTipoComplejo),
	constraint				uk_nombreTipoComplejo_tc	unique(nombreTipoComplejo)
);


-- COMPLEJOS 
CREATE TABLE Complejos
(
	idComplejo					int identity not null,
	idSede						int not null,
	idTipoComplejo				int not null,
	localizacion				varchar(255) not null,
	jefeOrganizacion			varchar(255) not null,
	areaTotalOcupada			decimal(14,4) not null,
	constraint		pk_idComplejo_co		primary key(idComplejo),
	constraint		uk_idSede_co			foreign key(idSede)				references	Sedes(idSede),
	constraint		uk_idTipoComplejo_co	foreign key(idTipoComplejo)		references	TipoComplejos(idTipoComplejo),
);

-- EVENTOS
CREATE TABLE Eventos
(
	idEvento					int identity not null,
	idComplejo					int not null,
	fecha						date not null,
	duracion					decimal(8,2) not null,
	numeroParticipantes			int not null,
	numeroComisarios			int not null,
	constraint		pk_idEvento_ev				primary key(idEvento),
	constraint		uk_idComplejo_ev			foreign key(idComplejo)				references	Complejos(idComplejo)
);


-- COMISARIOS
CREATE TABLE Comisarios
(
	idComisario				int identity not null,
	nombreComisario			varchar(255) not null,
	constraint				pk_idComisario_co			primary key(idComisario)
);


-- TIPO COMISARIOS
CREATE TABLE TipoComisarios
(
	idTipoComisario			int identity not null,
	nombreTipoComisario		varchar(255) not null,
	constraint				pk_idTipoComisario_tco		primary key(idTipoComisario)
);


-- EVENTOS COMISARIOS
CREATE TABLE EventosComisarios
(
	idEventoComisario		int identity not null,
	idEvento				int not null,
	idComisario				int not null,
	idTipoComisario			int not null,
	constraint			pk_idTipoComisario_eco		primary key(idEventoComisario),
	constraint			fk_idEvento_eco				foreign key(idEvento)			references Eventos(idEvento),
	constraint			fk_idComisario_eco			foreign key(idComisario)		references Comisarios(idComisario),
	constraint			fk_idTipoComisario_eco		foreign key(idTipoComisario)	references TipoComisarios(idTipoComisario),
);


-- EQUIPAMIENTOS
CREATE TABLE Equipamientos
(
	idEquipamiento			int identity not null,
	nombreEquipamiento		varchar(255) not null,
	constraint				pk_idEquipamiento_equ		primary key(idEquipamiento)
);

-- EVENTOS EQUIPAMIENTOS
CREATE TABLE EventosEquipamientos
(
	idEventoEquipamiento		int identity not null,
	idEquipamiento				int not null,
	idEvento					int not null,
	constraint			pk_idEventoEquipamiento_eeq		primary key(idEventoEquipamiento),
	constraint			fk_idEquipamiento_eeq			foreign key(idEquipamiento)			references Equipamientos(idEquipamiento),
	constraint			fk_idEvento_eeq					foreign key(idEvento)		references Eventos(idEvento),
);


-- USUARIOS
CREATE TABLE Usuarios
(
	idUsuario			int identity not null,
	usuario				varchar(255) not null,
	clave				varchar(255) not null,
	nombreUsuario	varchar(255) not null,
	constraint		pk_idUsuario_usu		primary key(idUsuario),
	constraint		uk_usuario_usu			unique(usuario)
);
