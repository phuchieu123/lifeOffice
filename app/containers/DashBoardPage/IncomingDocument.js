import React, { useState, useEffect, Fragment } from 'react';
// import {Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { INCOMING_DOCUMENT } from '../../configs/Paths';
import { handleSearch, serialize } from '../../utils/common';
import LoadingLayout from 'components/LoadingLayout';
import moment from 'moment';
import _ from 'lodash';
import * as RootNavigation from '../../RootNavigation';
import { TouchableNativeFeedback, TouchableOpacity, Text, View } from 'react-native';

export default IncomingDocument = (props) => {
    const { } = props;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        setLoading(true)

        const newQuery = {
            sort: '-receiveTime',
            filter: {
                type: 2
            },
            limit: 3,
            skip: 0,
        }
        const url = `${await INCOMING_DOCUMENT()}?${serialize(newQuery)}`;

        await handleSearch(url, (e) => {
            if (Array.isArray(e)) {
                let newData = [...e]
                newData = newData.map(item => ({
                    ...item,
                    time: moment(item['receiveTime']).format('DD/MM/YYYY HH:mm'),
                    customHour: moment(item['receiveTime']).format('HH:mm'),
                    customDate: moment(item['receiveTime']).format('DD/MM/YY'),
                }))
                setData(newData)
            }
        })

        setLoading(false)
    }

    return (    
        <>
            <View style={styles.view}>
                <TouchableOpacity small rounded block style={{ width: '100%', marginVertical: 2, marginBottom: 5 }} onPress={getData} >
                    <Text style={{ textAlign: 'center' }}>Công văn đến</Text>
                    <Icon name='reload' style={{ position: 'absolute', right: 0, color: '#fff' }} />
                </TouchableOpacity>
            </View>
            <LoadingLayout isLoading={loading}>
                <View style={{ backgroundColor: '#fff', borderRadius: 10, marginBottom: 5 }}>
                    <View>
                        {data.length === 0 ?
                            <View>
                                <View>
                                    <Text >Không có công văn đến</Text>
                                </View>
                            </View>
                            :
                            <>
                                {data.map((item, index) => {
                                    return <TouchableNativeFeedback key={`CVD_${item._id}`} onPress={() => { RootNavigation.navigate('DetailsOfficialDispatch', { item }) }}>
                                        <View >
                                            <View>
                                                <Text >{item.name}</Text>
                                                <Text note>{item.receivingUnitName}</Text>
                                            </View>
                                            <View>
                                                <Text note>{item.customHour}</Text>
                                                <Text note>{item.customDate}</Text>
                                            </View>
                                        </View>
                                    </TouchableNativeFeedback>
                                })}
                            </>
                        }
                        <TouchableNativeFeedback onPress={() => RootNavigation.navigate('Officialdispatch', { type: 2 })}>
                            <View >
                                <View>
                                    <Text>Xem tất cả</Text>
                                </View>
                                <View>
                                    <Icon name="arrow-forward" />
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </LoadingLayout>
        </>
    );
};

const styles = {
    view: {
        flex: 1,
        flexDirection: 'row',
    },
};
