import axios from 'axios';
import IProduto from '../../genericInterfaces/IProduto';

export const getAllProdutos = () => axios.get('/produto');

export const addProduto = (produto: IProduto) => axios.post('/produto', produto);

export const deletarProduto = (id: number) => axios.delete(`/produto/${id}`);
