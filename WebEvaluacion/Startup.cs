using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebEvaluacion.Startup))]
namespace WebEvaluacion
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
