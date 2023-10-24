import React, { useState, useEffect } from 'react';
import { Container, Tab, TabHeading, Tabs, Text, Icon } from 'native-base';
import CustomHeader from '../../components/Header';
import { API_FILE_COMPANY, API_FILE_SHARE, API_FILE_USERS, } from '../../configs/Paths';
import RenderPage from './components/RenderPage';
import _ from 'lodash';

export default function LifeDriver() {
    return (
        <Container>
            <CustomHeader title='Kho dữ liệu' />
            <Tabs>
                <Tab heading={<TabHeading><Text>Công ty</Text></TabHeading>}>
                    <RenderPage api={API_FILE_COMPANY} folder="company" allowAdd allowShare />
                </Tab>
                <Tab heading={<TabHeading><Text>Của tôi</Text></TabHeading>}>
                    <RenderPage api={API_FILE_USERS} folder="users" allowAdd allowShare />
                </Tab>
                <Tab heading={<TabHeading><Text>Chia sẻ</Text></TabHeading>}>
                    <RenderPage api={API_FILE_SHARE} folder="share" allowShare />
                </Tab>
            </Tabs>
        </Container >
    )
}