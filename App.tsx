import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { PokemonDetailsScreen } from './src/screens/PokemonDetailsScreen';
import { PokemonListScreen } from './src/screens/PokemonListScreen';

const navigator = createStackNavigator({
  List: PokemonListScreen,
  ResultsShow: PokemonDetailsScreen
}, {
  initialRouteName: 'List',
  defaultNavigationOptions: {
    title: 'Pokedex'
  }
});

export default createAppContainer(navigator);