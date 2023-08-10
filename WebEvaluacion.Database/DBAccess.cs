using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//using System.Web.Configuration;
using System.Data.SqlClient;

namespace WebEvaluacion.Database
{
    public class DBAccess
    {
        public static SqlConnection ObtenerConexionSQL()
        {
            try
            {
                //return new SqlConnection("Data Source=.;Initial Catalog=proyectomoventi;Integrated Security=True");
                return new SqlConnection("Data Source=LAPTOTSC178\\SQLEXPRESS;Initial Catalog=proyectomoventi;Integrated Security=True");

            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
