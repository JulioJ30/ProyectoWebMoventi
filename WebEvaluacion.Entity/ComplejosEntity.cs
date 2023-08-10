using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebEvaluacion.Entity
{
    public class ComplejosEntity : GeneralEntity
    {
        public int idComplejo { get; set; }
        public int idSede { get; set; }
        public string nombreSede { get; set; }

        public int idTipoComplejo { get; set; }
        public string nombreTipoComplejo { get; set; }


        public string localizacion { get; set; }
        public string jefeOrganizacion { get; set; }
        public decimal areaTotalOcupada { get; set; }

    }
}