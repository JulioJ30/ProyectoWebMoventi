using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebEvaluacion.Entity
{
    public class UsuariosEntity : GeneralEntity
    {

        public int idUsuario { get; set; }
        public string usuario { get; set; }
        public string clave { get; set; }
        public string nombreUsuario { get; set; }


    }
}