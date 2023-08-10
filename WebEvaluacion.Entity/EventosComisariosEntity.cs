using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebEvaluacion.Entity
{
    public class EventosComisariosEntity : GeneralEntity
    {
        public int idEventoComisario { get; set; }
        public int idEvento { get; set; }
        public int idComisario { get; set; }
        public int idTipoComisario { get; set; }

    }
}