using Dapper;
using WebEvaluacion.Entity;
using System.Data;
using WebEvaluacion.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebEvaluacion.Model
{
    public class TiposComplejosModel
    {

        public IEnumerable<TipoComplejosEntity> MantTiposComplejos(TipoComplejosEntity parameters)
        {

            using (var conexion = DBAccess.ObtenerConexionSQL())
            {
                var sp_parametros = new DynamicParameters();

                sp_parametros.Add("@opcion", parameters.opcion, DbType.Int32, ParameterDirection.Input);
                sp_parametros.Add("@idTipoComplejo", parameters.idTipoComplejo, DbType.Int32, ParameterDirection.Input);
                sp_parametros.Add("@nombreTipoComplejo", parameters.nombreTipoComplejo, DbType.String, ParameterDirection.Input);

                return conexion.Query<TipoComplejosEntity>("uspMantTiposComplejos",
                                                    sp_parametros,
                                                    commandType: CommandType.StoredProcedure);

            }


        }
    }
}
