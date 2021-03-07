import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Components
import RegistrationScreen from '../views/registrationScreen';
import EditScreen from '../views/editScreen';
import SchedulingList from '../views/schedulingList';

const AppRoutes: React.FC = () => (          
            <Switch>
                <Route path="/" exact component={RegistrationScreen}/>
                <Route path="/edit" exact component={EditScreen}/>
                <Route path="/list" exact component={SchedulingList}/>
            </Switch>         
);

export default AppRoutes;