using EstoqueACPO.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EstoqueACPO.Data
{
    public class EstoqueACPOContext : DbContext
    {
        public EstoqueACPOContext(DbContextOptions<EstoqueACPOContext> options) : base(options) { }
        public DbSet<Produto> Produtos { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Produto>()
                .HasData(new List<Produto>()
                {
                   new Produto()
                    {
                        Id = 1,
                        Nome = "Tenis Adidas",
                        Valor = (decimal)79.90,
                        Unidades = 5,
                    },
                    new Produto()
                    {
                        Id = 2,
                        Nome = "Bicicleta Monark",
                        Valor = (decimal)200.00,
                        Unidades = 2,
                    },
                    new Produto()
                    {
                        Id = 3,
                        Nome = "Skol 350ml",
                        Valor = (decimal)2.75,
                        Unidades = 5,
                    },
                    new Produto()
                    {
                        Id = 4,
                        Nome = "Ventilador ARNO",
                        Valor = (decimal)100.00,
                        Unidades = 85,
                    }
                });
        }

    }
}
