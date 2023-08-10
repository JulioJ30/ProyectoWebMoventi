using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebEvaluacion.Entity
{
    public class EventosEquipamientosEntity : GeneralEntity
    {
        public int idEventoEquipamiento { get; set; }
        public int idEquipamiento { get; set; }
        public int idEvento { get; set; }

    }
}