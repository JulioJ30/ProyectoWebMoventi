using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using WebEvaluacion.Entity;
using System.Data;
using WebEvaluacion.Database;



namespace WebEvaluacion.Model
{
    public class UsuarioModel
    {

        public UsuariosEntity Login(UsuariosEntity parameters)
        {
           
            using (var conexion = DBAccess.ObtenerConexionSQL())
            {
                var sp_parametros = new DynamicParameters();

                sp_parametros.Add("@usuario", parameters.usuario, DbType.String, ParameterDirection.Input);
                sp_parametros.Add("@clave", parameters.clave, DbType.String, ParameterDirection.Input);

                return conexion.QuerySingleOrDefault<UsuariosEntity>("uspLogin",
                                                    sp_parametros,
                                                    commandType: CommandType.StoredProcedure);
            }
            
            
        }

    }
}
