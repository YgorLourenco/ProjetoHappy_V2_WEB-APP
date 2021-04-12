import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes() {
// "exact" e uma propriedade, onde se coloca na página principal, para não confundir os caminhos de cada página    
// "Switch" só vai chamar uma rota ao mesmo tempo
    return (
        <BrowserRouter>       
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/app" component={OrphanagesMap} />
          </Switch>
        </BrowserRouter>
    );
}

export default Routes;