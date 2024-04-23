import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { Dados } from 'myapp/dados.js'; 
import FormularioFornecedor from './myapp/funcoes/cadfornecedor.js'; 
import ListaFornecedores from './myapp/funcoes/listafornecedores.js';
import TelaInicial from './myapp/Home.js';



const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: { backgroundColor: '#ffffff' },
  headerTintColor: '#333333 ',
  headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' },
};a

const App = () => (
    <Dados>  
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={TelaInicial} options={{ title: 'Meeting App' }} />
          <Stack.Screen name="Formulário de cadastro do Fornecedor" component={FormularioFornecedor} options={{ title: 'Cadastro de Fornecedores' }} />
          <Stack.Screen name="Lista de Fornecedores" component={ListaFornecedores} options={{ title: 'Lista de Fornecedores' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Dados>
  );
  
  export default App;
    
const styles = StyleSheet.create({
    scroll: {
        flexGrow: 1,
        justifyContent: "center",
    },
    section: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    button: {
        marginTop: 20,
        backgroundColor:"#08a4f0",
        borderRadius: 17,
        width: '100%',
        paddingVertical: 16,
        paddingHorizontal: 21,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2.5,
    },
    buttonText: {
        color: '#000000',
        fontSize: 19,
        fontWeight: 'bolder'
    }
});






