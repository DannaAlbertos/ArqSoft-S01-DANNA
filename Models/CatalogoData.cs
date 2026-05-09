namespace Catalogo.Models
{
    public static class CatalogoData
    {
        public static List<Item> ObtenerItems()
        {
            return new List<Item>
            {
                new Item
                {
                    Id = 1,
                    Modelo = "Ferrari F8 Tributo",
                    Marca = "Ferrari",
                    Ano = 2019,
                    Motor = "V12",
                    Descripcion = "Uno de los carros deportivos más icónicos del mundo con 720 caballos de fuerza",
                    Imagen = "https://images.pexels.com/photos/29831790/pexels-photo-29831790.jpeg"
                },
                new Item
                {
                    Id = 2,
                    Modelo = "Lamborghini Revuelto",
                    Marca = "Lamborghini",
                    Ano = 2024,
                    Motor = "Híbrido",
                    Descripcion = "Hiperdeportivo híbrido de última generación con 1001 caballos de fuerza",
                    Imagen = "https://images.pexels.com/photos/37147592/pexels-photo-37147592.jpeg"
                },
                new Item
                {
                    Id = 3,
                    Modelo = "Porsche 911 Turbo",
                    Marca = "Porsche",
                    Ano = 2023,
                    Motor = "V8",
                    Descripcion = "Ícono del automovilismo deportivo con más de 70 años de historia",
                    Imagen = "https://images.pexels.com/photos/33621572/pexels-photo-33621572.jpeg"
                },
                new Item
                {
                    Id = 4,
                    Modelo = "McLaren 720S",
                    Marca = "McLaren",
                    Ano = 2017,
                    Motor = "V8",
                    Descripcion = "Superdeportivo británico de alto rendimiento con 710 caballos de fuerza",
                    Imagen = "https://images.pexels.com/photos/12568066/pexels-photo-12568066.jpeg"
                },
                new Item
                {
                    Id = 5,
                    Modelo = "Bugatti Chiron",
                    Marca = "Bugatti",
                    Ano = 2016,
                    Motor = "V12",
                    Descripcion = "El carro más potente jamás fabricado con 1500 caballos de fuerza",
                    Imagen = "https://images.pexels.com/photos/12964186/pexels-photo-12964186.jpeg"
                },
                new Item
                {
                    Id = 6,
                    Modelo = "Rolls-Royce Phantom",
                    Marca = "Rolls-Royce",
                    Ano = 2021,
                    Motor = "V12",
                    Descripcion = "Lujo y elegancia en su máxima expresión con 563 caballos de fuerza",
                    Imagen = "https://images.pexels.com/photos/26161350/pexels-photo-26161350.jpeg"
                },
                new Item
                {
                    Id = 7,
                    Modelo = "Ferrari SF90 Stradale",
                    Marca = "Ferrari",
                    Ano = 2019,
                    Motor = "Híbrido",
                    Descripcion = "Ferrari híbrido de máximo rendimiento con 986 caballos de fuerza",
                    Imagen = "https://images.pexels.com/photos/32261029/pexels-photo-32261029.jpeg"
                },
                new Item
                {
                    Id = 8,
                    Modelo = "Lamborghini Aventador",
                    Marca = "Lamborghini",
                    Ano = 2011,
                    Motor = "V12",
                    Descripcion = "Legendario superdeportivo italiano con 759 caballos de fuerza",
                    Imagen = "https://images.pexels.com/photos/6968984/pexels-photo-6968984.jpeg"
                }
            };
        }
    }
}
