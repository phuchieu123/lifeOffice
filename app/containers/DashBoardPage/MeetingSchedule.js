import React, { useState, useEffect, Fragment } from 'react';
import { TouchableNativeFeedback, View, Text } from 'react-native';
import { Button, Card, ListItem, List, Left, Right, } from 'native-base';
import { INCOMING_DOCUMENT, MEETING_SCHEDULE } from '../../configs/Paths';
import { handleSearch, serialize } from '../../utils/common';
import { taskKanbanData } from '../../utils/constants';
import LoadingLayout from 'components/LoadingLayout';
import moment from 'moment';
import _ from 'lodash';
import { getProfile } from '../../utils/authen';
import { navigate } from '../../RootNavigation';
import * as RootNavigation from '../../RootNavigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default IncomingDocument = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState();
    const { navigation, getCount } = props

    useEffect(() => {
        getData();
    }, []);

    const openChildMeeting = (item) => {
        if (navigation) {
            navigation.push('MeetingScheduleDatailPage', {
                "item._id": item._id,
            });
        };
        navigate('MeetingScheduleDatailPage', {
            "item._id": item._id,
        });
    }



    const getData = async () => {
        setLoading(true)

        await getProfile().then(async profile => {
            const newQuery = {
                sort: 'timeStart',
                filter: {
                    typeCalendar: 1,
                    people: {
                        $in: [{
                            _id: profile._id
                        }]
                    }
                },
                limit: 3,
                skip: 0,
            }
            const url = `${await MEETING_SCHEDULE()}?${serialize(newQuery)}`;

            await handleSearch(url,
                (e) => {
                    if (Array.isArray(e)) {
                        let newData = [...e]
                        newData = newData.map(item => ({
                            ...item,
                            timeStartFormat: moment(item['timeStart']).format('HH:mm'),
                            timeEndFormat: moment(item['timeEnd']).format('HH:mm'),
                            // dateFormat: moment(item['timeStart']).format('DD-MM-YY'),
                        }))
                        setData(newData)
                    }
                }, {
                getResponse: res => {
                    res && res.count && getCount && getCount(res.count)
                }
            })

        })

        setLoading(false)
    }

    return (
        <>
            <View style={styles.view}>
                <Button small rounded block style={{ width: '100%',
          marginVertical: 2, 
          borderRadius: 20, 
          backgroundColor: 'rgba(46, 149, 46, 1)', 
            
          }} 
          onPress={getData}>    
                    <View style={{ width:'100%', position: 'relative' }}>
                        <Text style={{ color: 'white',flex: 1}}>Lịch họp </Text>
                    </View>
                    <Ionicons name='reload' style={{ right: 0, color: '#fff', position:'absolute', right: -140 }} />

                </Button>
            </View>
            <LoadingLayout isLoading={loading}>
                <View style={{ backgroundColor: '#fff', borderRadius: 10, marginBottom: 5, paddingLeft: 5, paddingTop: 10 }} >
                    <View >
                        {data.length === 0 ?

                            <View style={{borderBottomColor:'#b2b2b2', borderBottomWidth: 1}}>
                                <View style={{padding: 10}}>
                                    <Text >Không có lịch họp</Text>
                                </View>
                            </View>
                            :
                            <>
                                {data.map((item, index) => {
                                    return <TouchableNativeFeedback onPress={() => { openChildMeeting(item) }} key={`${item._id}`} >
                                        <View>
                                            <View >
                                                <Text style={{}}>{item.name}</Text>
                                                {_.has(item, 'roomMetting.name') ? <Text note>{item.roomMetting.name}</Text> : null}
                                            </View>
                                            <View >
                                                <Text note>{item.timeStartFormat}</Text>
                                                <Text note>{item.timeEndFormat}</Text>
                                            </View>
                                        </View>
                                    </TouchableNativeFeedback>
                                })}
                            </>
                        }
                        <TouchableNativeFeedback onPress={() => RootNavigation.navigate('MeetingSchedulePage')}>
                            <View  style={{ flexDirection: 'row', alignItems:'center', justifyContent: 'space-between'}}>
                                <View style={{padding: 10}}>
                                    <Text>Xem tất cả </Text>
                                </View>
                                <View>
                                    <Icon name="arrow-forward" style={{paddingRight:10  }} />
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
