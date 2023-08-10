using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebEvaluacion.Model;
using WebEvaluacion.Entity;


namespace WebEvaluacion.Controllers
{
    public class HomeController : Controller
    {

        SedesModel objSedesModel = new SedesModel();
        TiposComplejosModel objTipoComplejoModel = new TiposComplejosModel();
        ComplejoModel objComplejoModel = new ComplejoModel();



        public ActionResult Index()
        {
            if (Session["usuario"] != null)
            {
                return View();
            }
            else
            {
                return Redirect("/");
            }
        }


        public ActionResult About()
        {
            if (Session["usuario"] != null)
            {
                return View();
            }
            else
            {
                return Redirect("/");
            }
        }

        public ActionResult Contact()
        {
            if (Session["usuario"] != null)
            {
                return View();
            }
            else
            {
                return Redirect("/");
            }
        }

        [HttpPost]
        public ActionResult MantSedes(SedesEntity parametros)
        {
            return Json(objSedesModel.MantSedes(parametros));
        }

        [HttpPost]
        public ActionResult MantTipoComplejo(TipoComplejosEntity parametros)
        {
            return Json(objTipoComplejoModel.MantTiposComplejos(parametros));
        }

        [HttpPost]
        public ActionResult MantComplejos(ComplejosEntity parametros)
        {
            return Json(objComplejoModel.MantComplejos(parametros));
        }
    }
}