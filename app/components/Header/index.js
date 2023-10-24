import React, { useState, useEffect, useRef } from 'react';
import { Header, Icon, Title, Body, Right, View, Text } from 'native-base';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import _ from 'lodash';
import MsgIcon from '../../containers/Message/components/MsgIcon';

function CustomHeader(props) {
    const { navigation, title, onGoBack, rightHeader } = props;

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
                {navigation && <Icon
                    name="arrow-back"
                    type="MaterialIcons"
                    onPress={handleGoBack}
                    style={{ color: '#fff', top: 3 }}
                />}
                <Title style={{ marginLeft: 10 }}>{title}</Title>
            </Body>
            <Right style={{ top: 2 }}>
                {rightHeader}
                {/* <MsgIcon /> */}
            </Right>
        </Header >
    );
}

// export default CustomHeader;
export default connect(
    createStructuredSelector({
    }),
)(CustomHeader);
