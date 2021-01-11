import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { View, Text, Button } from 'react-native';
import { RootDrawerParamList } from '../../routes';

const Home: React.FC = () => {
  const navigation = useNavigation() as DrawerNavigationProp<
    RootDrawerParamList,
    'Home'
  >;
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Open Menu Lateral"
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
};

export default Home;
