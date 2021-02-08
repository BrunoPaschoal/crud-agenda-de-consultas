import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

//Components
import RegistrationScreen from '../views/registrationScreen';
import EditScreen from '../views/editScreen';
import SchedulingList from '../views/schedulingList';

//Layout import
//import Layout from '../components/Layout'

const AppRoutes: React.FC = () => (    
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={RegistrationScreen}/>
                <Route path="/edit" exact component={EditScreen}/>
                <Route path="/list" exact component={SchedulingList}/>
            </Switch>    
        </BrowserRouter>    
);

export default AppRoutes;