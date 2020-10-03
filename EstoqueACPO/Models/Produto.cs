using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EstoqueACPO.Models
{
    public class Produto
    {
        public Produto()
        {
        }

        public Produto(int id, string nome, decimal valor, int unidades)
        {
            Id = id;
            Nome = nome;
            Valor = valor;
            Unidades = unidades;
        }

        public int Id { get; set; }

        public string Nome { get; set; }

        public decimal Valor { get; set; }

        public int Unidades { get; set; }

    }
}
