using Catalogo.Models;
using Microsoft.AspNetCore.Mvc;

namespace Catalogo.Controllers
{
    public class CatalogoController : Controller
    {
        private static List<Item> _items = CatalogoData.ObtenerItems();

        // Lista — con filtro opcional por motor
        public IActionResult Index(string? motor)
        {
            var resultado = string.IsNullOrEmpty(motor)
                ? _items
                : _items.Where(i => i.Motor == motor).ToList();

            ViewBag.Motores = _items.Select(i => i.Motor).Distinct().ToList();
            ViewBag.MotorActual = motor;

            return View(resultado);
        }

        // Detalle
        public IActionResult Detalle(int id)
        {
            var item = _items.FirstOrDefault(i => i.Id == id);
            return item == null ? NotFound() : View(item);
        }

        // Formulario — GET
        public IActionResult Agregar()
        {
            return View();
        }

        // Formulario — POST
        [HttpPost]
        public IActionResult Agregar(Item item)
        {
            item.Id = _items.Count + 1;
            _items.Add(item);
            return RedirectToAction("Index");
        }
    }
}
