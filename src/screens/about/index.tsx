import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Button } from 'react-native';
import { RootDrawerParamList } from '../../routes';
import Header from '../../components/Header';
import { Container } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation() as DrawerNavigationProp<
    RootDrawerParamList,
    'Home'
  >;
  return (
    <Container>
      <Header title="About" onPress={() => navigation.openDrawer()} />

      <Button
        title="Open Menu Lateral"
        onPress={() => navigation.openDrawer()}
      />
    </Container>
  );
};

export default Home;
