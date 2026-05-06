using Catalogo.Models;
using Microsoft.AspNetCore.Mvc;

namespace Catalogo.Controllers
{
    public class CatalogoController : Controller
    {
        private static List<Item> _items = new()
        {
            new Item
            {
                Id = 1,
                Modelo = "Zonda R",
                Marca = "Pagani",
                Ano = 2001,
                Motor = "V10",
                Descripcion = "Italiano"
            },

            new Item
            {
                Id = 2,
                Modelo = "350z",
                Marca = "Nissan",
                Ano = 2007,
                Motor = "V6",
                Descripcion = "JDM"
            },

            new Item
            {
                Id = 3,
                Modelo = "Aventador",
                Marca = "Lamborghini",
                Ano = 2017,
                Motor = "V10",
                Descripcion = "Italiano"
            }
        };


        // Lista con filtro opcional por género
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

        // Formulario GET
        public IActionResult Agregar()
        {
            return View();
        }

        // Formulario POST
        [HttpPost]
        public IActionResult Agregar(Item item)
        {
            item.Id = _items.Count + 1;
            _items.Add(item);

            return RedirectToAction("Index");
        }
    }
}
