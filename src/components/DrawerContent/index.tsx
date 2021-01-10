import React from 'react';
import { View } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import MenuItem from '../MenuItem';
import {
  Container,
  NameUser,
  TitleUser,
  Body,
  Footer,
  Logo,
  HeaderBody,
} from './styles';

const DrawerContent = (
  props: DrawerContentComponentProps,
): React.ReactElement => {
  const menuItems = [
    {
      label: 'Principal',
      route: 'Home',
      icon: 'home',
    },
  ];

  return (
    <Container>
      <Body>
        <HeaderBody>
          <View>
            <Logo name="icon-light" />
          </View>
          <NameUser>Ednilson</NameUser>
          <TitleUser>Desenvolvedor</TitleUser>
        </HeaderBody>
        {menuItems.map(item => (
          <MenuItem
            navigation={props}
            key={item.route}
            icon={item.icon}
            routeName={item.route}
            label={item.label}
          />
        ))}
      </Body>
      <Footer>
        <MenuItem
          navigation={props}
          onPress={() => console.log('Teste')}
          icon="power"
          label="Sair"
        />
      </Footer>
    </Container>
  );
};

export default DrawerContent;
