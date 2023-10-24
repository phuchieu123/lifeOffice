import React, { useState, useEffect, Fragment } from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { Text, View, Button, Card, ListItem, List, Left, Right, Icon, Body } from 'native-base';
import { INCOMING_DOCUMENT, MEETING_SCHEDULE } from '../../configs/Paths';
import { handleSearch, serialize } from '../../utils/common';
import { taskKanbanData } from '../../utils/constants';
import LoadingLayout from 'components/LoadingLayout';
import moment from 'moment';
import _ from 'lodash';
import { getProfile } from '../../utils/authen';
import { navigate } from '../../RootNavigation';
import * as RootNavigation from '../../RootNavigation';

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
                <Button small rounded block style={{ width: '100%', marginVertical: 2, marginBottom: 5 }} onPress={getData}>
                    <Text style={{ textAlign: 'center' }}>Lịch họp</Text>
                    <Icon type='Ionicons' name='reload' style={{ position: 'absolute', right: 0, color: '#fff' }} />
                </Button>
            </View>
            <LoadingLayout isLoading={loading}>
                <View style={{ backgroundColor: '#fff', borderRadius: 10, marginBottom: 5 }} >
                    <List>
                        {data.length === 0 ?

                            <ListItem>
                                <Body>
                                    <Text>Không có lịch họp</Text>
                                </Body>
                            </ListItem>
                            :
                            <>
                                {data.map((item, index) => {
                                    return <TouchableNativeFeedback onPress={() => { openChildMeeting(item) }} key={`${item._id}`} >
                                        <ListItem>
                                            <Body>
                                                <Text style={{}}>{item.name}</Text>
                                                {_.has(item, 'roomMetting.name') ? <Text note>{item.roomMetting.name}</Text> : null}
                                            </Body>
                                            <Right >
                                                <Text note>{item.timeStartFormat}</Text>
                                                <Text note>{item.timeEndFormat}</Text>
                                            </Right>
                                        </ListItem>
                                    </TouchableNativeFeedback>
                                })}
                            </>
                        }
                        <TouchableNativeFeedback onPress={() => RootNavigation.navigate('MeetingSchedulePage')}>
                            <ListItem>
                                <Body>
                                    <Text>Xem tất cả</Text>
                                </Body>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                        </TouchableNativeFeedback>
                    </List>
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
