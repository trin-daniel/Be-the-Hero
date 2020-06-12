import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import Incidents from './pages/Incidents';
import Details from './pages/Details';

const stack = createStackNavigator();

function Routes(){
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{headerShown: false}}>
                <stack.Screen name="Incident" component={Incidents}/>
                <stack.Screen name="Detail" component={Details}/>
            </stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;