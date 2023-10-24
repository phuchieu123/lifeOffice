import React from 'react';
import { Header, Icon, Title, Body, Right } from 'native-base';
import MsgIcon from '../../containers/Message/components/MsgIcon';

function BackHeader(props) {
  const { navigation, title, onGoBack, rightHeader, istrue } = props;
  const handleGoBack = () => {
    if (onGoBack) {
      onGoBack();
    } else {
      navigation.goBack();
    }
  };
  return (
    <Header>
      <Body style={{ flexDirection: 'row', flex: 1 }}>
        {navigation || onGoBack ? <Icon
          name="arrow-back"
          type="MaterialIcons"
          onPress={handleGoBack}
          style={{ color: '#fff', marginRight: 10, top: 3 }}
        /> : null}
        <Title>{title}</Title>
      </Body>
      <Right style={{ flex: 0.2, top: 2 }}>
        {rightHeader}
        {/* <MsgIcon /> */}
      </Right>
    </Header>
  );
}

export default BackHeader;
