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
    public class ComplejoModel
    {
        public IEnumerable<ComplejosEntity> MantComplejos(ComplejosEntity parameters)
        {

            using (var conexion = DBAccess.ObtenerConexionSQL())
            {
                var sp_parametros = new DynamicParameters();

                sp_parametros.Add("@opcion", parameters.opcion, DbType.Int32, ParameterDirection.Input);
                sp_parametros.Add("@idComplejo", parameters.idComplejo, DbType.Int32, ParameterDirection.Input);
                sp_parametros.Add("@idSede", parameters.idSede, DbType.Int32, ParameterDirection.Input);
                sp_parametros.Add("@idTipoComplejo", parameters.idTipoComplejo, DbType.Int32, ParameterDirection.Input);
                sp_parametros.Add("@localizacion", parameters.localizacion, DbType.String, ParameterDirection.Input);
                sp_parametros.Add("@jefeOrganizacion", parameters.jefeOrganizacion, DbType.String, ParameterDirection.Input);
                sp_parametros.Add("@areaTotalOcupada", parameters.areaTotalOcupada, DbType.Decimal, ParameterDirection.Input);

                return conexion.Query<ComplejosEntity>("uspMantComplejos",
                                                    sp_parametros,
                                                    commandType: CommandType.StoredProcedure);

            }


        }
    }
}
