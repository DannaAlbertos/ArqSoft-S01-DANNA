namespace Catalogo.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Modelo { get; set; }      
        public string Marca { get; set; }       
        public int Ano { get; set; }            
        public string Motor { get; set; }       
        public string Descripcion { get; set; } 
        public string Imagen { get; set; }      
    }
}
