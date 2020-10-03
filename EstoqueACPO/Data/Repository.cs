using EstoqueACPO.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EstoqueACPO.Data
{
    public class Repository : IRepository
    {
        private readonly EstoqueACPOContext _context;
        public Repository(EstoqueACPOContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Remove<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }

        public bool SaveChanges()
        {
            return(_context.SaveChanges() > 0);
        }

        public Produto[] GetAllProdutos()
        {
            IQueryable<Produto> query = _context.Produtos;

            query = query.AsNoTracking().OrderBy(produto => produto.Id);

            return query.ToArray();
        }

        public Produto GetProdutosByID(int id)
        {
            IQueryable<Produto> query = _context.Produtos;

            query = query.AsNoTracking().Where(produto => produto.Id == id);

            return query.FirstOrDefault();
        }
    }
}
