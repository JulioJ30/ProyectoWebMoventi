using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebEvaluacion.Entity;
using WebEvaluacion.Model;

namespace WebEvaluacion.Controllers
{
    public class LoginController : Controller
    {

        UsuarioModel objUsuarioModel = new UsuarioModel();

        // GET: Login
        public ActionResult Index()
        {

            if (Session["usuario"] == null)
            {
                return View();
            }
            else
            {
                return Redirect("/home/index");
            }

        }

        [HttpPost]
        public ActionResult Login(UsuariosEntity parametros)
        {

            var response = objUsuarioModel.Login(parametros);


            Session["usuario"] = response.idUsuario != 0 ? response.nombreUsuario : null;


            return Json(response);
        }

        [HttpGet]
        //CERRAR SESION
        public ActionResult CerrarSesion()
        {
            Session.RemoveAll();
            Session.Clear();
            Session.Abandon();

            //URL_EXTERNO.URL = null;

            return Redirect("/");
        }
    }
}