import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PokemonDetailsScreen from './src/components/PokemonDetailsScreen';
import PokemonListScreen from './src/components/PokemonListScreen';

const navigator = createStackNavigator({
  List: PokemonListScreen,
  Details: PokemonDetailsScreen
}, {
  initialRouteName: 'List',
});

export default createAppContainer(navigator);