import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container as ContainerReactstrap } from 'reactstrap';

import { getProdutosRequest } from '../store/modules/produto/actions';
import Home from '../pages/Home';
import CadastroProduto from '../pages/CadastroProduto';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/modules/rootReducer';

const Container = () => {
  const dispatch = useDispatch();

  const { produtos } = useSelector(({ produto }: RootState) => produto);

  useEffect(() => {
    if (produtos.length === 0) dispatch(getProdutosRequest());
  }, [dispatch, produtos.length]);

  return (
    <ContainerReactstrap>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/NovoProduto' component={CadastroProduto} />
      </Switch>
    </ContainerReactstrap>
  );
};
export default Container;
