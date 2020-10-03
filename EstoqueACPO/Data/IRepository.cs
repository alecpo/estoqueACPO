using EstoqueACPO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EstoqueACPO.Data
{
    public interface IRepository
    {
        void Add<T>(T entity) where T: class;

        void Update<T>(T entity) where T : class;

        void Remove<T>(T entity) where T : class;

        bool SaveChanges();

        Produto[] GetAllProdutos();

        Produto GetProdutosByID(int id);
    }
}
