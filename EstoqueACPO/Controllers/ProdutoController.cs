using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EstoqueACPO.Data;
using EstoqueACPO.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EstoqueACPO.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutoController : ControllerBase
    {
        public readonly IRepository _repo;

        public ProdutoController(IRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllProdutos()
        {
            return Ok(_repo.GetAllProdutos());
        }

        [HttpPost]
        public IActionResult AddNewProduct([FromBody] Produto produto)
        {
            _repo.Add(produto);

            if (_repo.SaveChanges())
            {
                return Ok(produto);
            }

            return BadRequest("Produto não cadastrado.");
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, [FromBody] Produto produto)
        {
            var prod = _repo.GetProdutosByID(id);

            if (prod == null)
                return BadRequest("Produto não encontrado");

            _repo.Update(produto);

            if (_repo.SaveChanges())
            {
                return Ok(produto);
            }

            return BadRequest("Produto não atualizado.");
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var prod = _repo.GetProdutosByID(id);

            if (prod == null)
                return BadRequest("Produto não encontrado");

            _repo.Remove(prod);

            if (_repo.SaveChanges())
            {
                return Ok("Produto excluído com sucesso");
            }

            return BadRequest("Produto não excluído.");
        }
    }
}
