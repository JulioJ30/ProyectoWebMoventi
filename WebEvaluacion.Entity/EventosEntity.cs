using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebEvaluacion.Entity
{
    public class EventosEntity
    {
        public int idEvento { get; set; }
        public int idComplejo { get; set; }

        public DateTime fecha { get; set; }
        public decimal duracion { get; set; }
        public int numeroParticipantes { get; set; }
        public int numeroComisarios { get; set; }

    }
}