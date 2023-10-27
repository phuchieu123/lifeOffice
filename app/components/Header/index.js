    import React, { useState, useEffect, useRef } from 'react';
    import {  Body, Right, } from 'native-base';
    import { connect } from 'react-redux'
    import { createStructuredSelector } from 'reselect';
    import { View, Text } from 'react-native';
    import Icon from 'react-native-vector-icons/MaterialIcons';
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
            <View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    {navigation && <Icon
                        name="arrow-back"
                        type="MaterialIcons"
                        onPress={handleGoBack}
                        style={{ color: '#fff', top: 3 }}
                    />}
                    <Text style={{ marginLeft: 10 }}>{title}</Text>
                </View>
                <View style={{ top: 2 }}>
                    {rightHeader}
                    {/* <MsgIcon /> */}
                </View>
            </View >
        );
    }

    // export default CustomHeader;
    export default connect(
        createStructuredSelector({
        }),
    )(CustomHeader);
