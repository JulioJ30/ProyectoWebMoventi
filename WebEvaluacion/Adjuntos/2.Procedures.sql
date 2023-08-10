use proyectomoventi
go


-- LOGIN SIMPLE
create procedure uspLogin
(
	@usuario			varchar(255) = null,
	@clave				varchar(255)  = null
)as
begin
	if exists (
		select 1 from Usuarios
	where usuario =  @usuario and clave = @clave
	)begin

		select 
			idusuario,usuario,clave,nombreUsuario
		from Usuarios
		where usuario =  @usuario and clave = @clave

	end
	else
	begin
		
		select 0 idusuario 

	end 


end


-- STORE CRUD SEDES
create procedure uspMantSedes
(
	@opcion						int = 1,
	@idSede						int = null,
	@nombreSede					varchar(255) = null,
	@numeroComplejos			int = null,
	@presupuestoAproximado		decimal(14,4) = null

)as
begin
	
	-- REGISTRAR
	if @opcion = 1
	begin
		begin tran
		insert into Sedes
		(
			nombreSede,numeroComplejos,presupuestoAproximado
		)values
		(
			@nombreSede,@numeroComplejos,@presupuestoAproximado		
		)

		commit tran

		Select 
			idSede,
			nombreSede,
			numeroComplejos,
			presupuestoAproximado
		from Sedes

	end

	-- MODIFICAR
	if @opcion = 2
	begin
		begin tran
		update Sedes set
			nombreSede = @nombreSede,
			numeroComplejos = @numeroComplejos,
			presupuestoAproximado = @presupuestoAproximado
		where idSede =  @idSede
		commit tran

		Select 
			idSede,
			nombreSede,
			numeroComplejos,
			presupuestoAproximado
		from Sedes

	end

	-- LISTAR
	if @opcion = 3
	begin
			
		Select 
			idSede,
			nombreSede,
			numeroComplejos,
			presupuestoAproximado
		from Sedes

	end

	-- ELIMINAR
	if @opcion = 4
	begin
		begin tran
		delete from Sedes where idSede =  @idSede
		commit tran

		Select 
			idSede,
			nombreSede,
			numeroComplejos,
			presupuestoAproximado
		from Sedes

	end	


end




-- STORE CRUD TIPOS COMPLEJOS
create procedure uspMantTiposComplejos
(
	@opcion						int = 1,
	@idTipoComplejo				int = null,
	@nombreTipoComplejo			varchar(255) = null

)as
begin
	
	-- REGISTRAR
	if @opcion = 1
	begin
		begin tran
		insert into TipoComplejos
		(
			nombreTipoComplejo
		)values
		(
			@nombreTipoComplejo	
		)
		commit tran

		Select 
			idTipoComplejo,
			nombreTipoComplejo
		from TipoComplejos

	end

	-- MODIFICAR
	if @opcion = 2
	begin
		begin tran
			update TipoComplejos set
				nombreTipoComplejo = @nombreTipoComplejo
			where idTipoComplejo =  @idTipoComplejo
		commit tran

		Select 
			idTipoComplejo,
			nombreTipoComplejo
		from TipoComplejos
	end

	-- LISTAR
	if @opcion = 3
	begin
			
		Select 
			idTipoComplejo,
			nombreTipoComplejo
		from TipoComplejos

	end

	-- ELIMINAR
	if @opcion = 4
	begin
		begin tran
		delete from TipoComplejos where idTipoComplejo =  @idTipoComplejo
		commit tran

		Select 
			idTipoComplejo,
			nombreTipoComplejo
		from TipoComplejos
	end	


end



-- STORE CRUD COMPLEJOS
create procedure uspMantComplejos
(
	@opcion						int = 1,
	@idComplejo					int = null,
	@idSede						int = null,
	@idTipoComplejo				int = null,
	@localizacion				varchar(255) = null,
	@jefeOrganizacion			varchar(255) = null,
	@areaTotalOcupada			decimal(14,4) = null

)as
begin
	
	-- REGISTRAR
	if @opcion = 1
	begin
		begin tran
		insert into complejos
		(
			idSede,idTipoComplejo,localizacion,jefeOrganizacion,areaTotalOcupada
		)values
		(
			@idSede,@idTipoComplejo,@localizacion,@jefeOrganizacion,@areaTotalOcupada
		)
		commit tran

		Select 
			a.idcomplejo, a.idSede,a.idTipoComplejo,a.localizacion,a.jefeOrganizacion,a.areaTotalOcupada,
			b.nombreSede,
			c.nombreTipoComplejo
		from Complejos a
		inner join sedes b
		on b.idsede = a.idsede
		inner join TipoComplejos c
		on c.idTipoComplejo = a.idTipoComplejo

	end

	-- MODIFICAR
	if @opcion = 2
	begin
		begin tran
			update complejos set
				localizacion		= @localizacion,
				jefeOrganizacion	= @jefeOrganizacion,
				areaTotalOcupada	= @areaTotalOcupada
			where idComplejo =  @idComplejo
		commit tran

		Select 
			a.idcomplejo, a.idSede,a.idTipoComplejo,a.localizacion,a.jefeOrganizacion,a.areaTotalOcupada,
			b.nombreSede,
			c.nombreTipoComplejo
		from Complejos a
		inner join sedes b
		on b.idsede = a.idsede
		inner join TipoComplejos c
		on c.idTipoComplejo = a.idTipoComplejo

	end

	-- LISTAR
	if @opcion = 3
	begin
			
		Select 
			a.idcomplejo, a.idSede,a.idTipoComplejo,a.localizacion,a.jefeOrganizacion,a.areaTotalOcupada,
			b.nombreSede,
			c.nombreTipoComplejo
		from Complejos a
		inner join sedes b
		on b.idsede = a.idsede
		inner join TipoComplejos c
		on c.idTipoComplejo = a.idTipoComplejo

	end

	-- ELIMINAR
	if @opcion = 4
	begin
		begin tran
		delete from Complejos where idComplejo =  @idComplejo
		commit tran

		Select 
			a.idcomplejo, a.idSede,a.idTipoComplejo,a.localizacion,a.jefeOrganizacion,a.areaTotalOcupada,
			b.nombreSede,
			c.nombreTipoComplejo
		from Complejos a
		inner join sedes b
		on b.idsede = a.idsede
		inner join TipoComplejos c
		on c.idTipoComplejo = a.idTipoComplejo

	end	


end
