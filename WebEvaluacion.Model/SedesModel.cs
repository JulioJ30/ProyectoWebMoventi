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
    public class SedesModel
    {

        public IEnumerable<SedesEntity> MantSedes(SedesEntity parameters)
        {

            using (var conexion = DBAccess.ObtenerConexionSQL())
            {
                var sp_parametros = new DynamicParameters();

                sp_parametros.Add("@opcion", parameters.opcion, DbType.Int32, ParameterDirection.Input);
                sp_parametros.Add("@idSede", parameters.idSede, DbType.Int32, ParameterDirection.Input);
                sp_parametros.Add("@nombreSede", parameters.nombreSede, DbType.String, ParameterDirection.Input);
                sp_parametros.Add("@numeroComplejos", parameters.numeroComplejos, DbType.Int32, ParameterDirection.Input);
                sp_parametros.Add("@presupuestoAproximado", parameters.presupuestoAproximado, DbType.Decimal, ParameterDirection.Input);

                return conexion.Query<SedesEntity>("uspMantSedes",
                                                    sp_parametros,
                                                    commandType: CommandType.StoredProcedure);

            }


        }

    }
}
