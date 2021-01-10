import React, { useCallback, useMemo } from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { CustomText, Container, IconMenu } from './styles';

interface MenuItemProps {
  routeName?: string;
  icon: string;
  label: string;
  onPress?(): void;
  navigation: DrawerContentComponentProps;
}

const MenuItem: React.FC<MenuItemProps> = ({
  routeName,
  icon,
  label,
  onPress,
  navigation,
}) => {
  const ActiveRouteName = useMemo(() => {
    if (!routeName) {
      return '';
    }

    return navigation.state.routeNames[Number(navigation.state.index)];
  }, [navigation, routeName]);

  const IsActive = useMemo(() => {
    return ActiveRouteName === routeName;
  }, [ActiveRouteName, routeName]);

  const navigationToScreen = useCallback(() => {
    if (onPress) {
      onPress();
    } else if (routeName) {
      navigation.navigation.navigate(routeName);
    }
  }, [navigation, routeName, onPress]);
  return (
    <Container key="3" isActive={IsActive} onPress={navigationToScreen}>
      <IconMenu name={icon} size={24} color={IsActive ? '#000' : '#BFF'} />
      <CustomText isActive={IsActive}>{label}</CustomText>
    </Container>
  );
};

export default MenuItem;
