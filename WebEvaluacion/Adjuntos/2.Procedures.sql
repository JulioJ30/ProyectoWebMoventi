use proyectomoventi
go


-- LOGIN SIMPLE
create procedure uspLogin
(
	@usuario			varchar(255) = null,
	@clave				varchar(255)  = null
)as
begin
	
	select 
		idusuario,usuario,clave,nombreUsuario
	from Usuarios
	where usuario =  @usuario and clave = @clave

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

	end

	-- MODIFICAR
	if @opcion = 2
	begin
		begin tran
		update Sedes set
			nombreSede = @nombreSede,
			numeroComplejos = @numeroComplejos
		where idSede =  @idSede
		commit tran
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

	end

	-- MODIFICAR
	if @opcion = 2
	begin
		begin tran
			update TipoComplejos set
				nombreTipoComplejo = @nombreTipoComplejo
			where idTipoComplejo =  @idTipoComplejo
		commit tran
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
	end	


end
