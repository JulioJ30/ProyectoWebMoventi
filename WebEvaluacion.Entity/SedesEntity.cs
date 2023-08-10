using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebEvaluacion.Entity
{
    public class SedesEntity
    {
        public int idSede { get; set; }
        public string nombreSede { get; set; }
        public int numeroComplejos { get; set; }
        public decimal presupuestoAproximado { get; set; }

    }
}