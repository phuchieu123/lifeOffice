import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
export default ProjectPage = () => {
    const [isShowSearch, setIsShowSearch]=useState(false)
    const [search, setSearch] = useState('')
    const styles = StyleSheet.create({
        banner:{
            backgroundColor: 'rgba(46, 149, 46, 1)',
            height: 50,
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems: 'center',
            position:'relative',
            zIndex: 2
        },
        textBanner:{
            paddingLeft: 10,
            color: 'white',
            fontSize: 20
        },
        iconBanner:{
            flexDirection: 'row'

        },
        iconBanner1:{
            color:'white',
            fontSize: 20
        },
        iconBanner2:{
            color:'white',
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: 20
        },
        bannerSearch:{
            position: 'absolute',
            top: 8,
            height: 34 ,    
            backgroundColor:'white',
            zIndex: 5,
            left: 8,
            right: 8, 
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }
    })
    const handleShowSearch=()=>{
        setIsShowSearch(true)
    }

    return (    
        <View>
        {/* banner ProjectPage */}
            <View style={styles.banner}>
                <Text style={styles.textBanner}>Công việc</Text>
                <View style={styles.iconBanner}>
                    <Icon name='search' style={styles.iconBanner1} onPress={handleShowSearch}></Icon>
                    <Icon name='filter' style={styles.iconBanner2}></Icon>
                </View>
                {isShowSearch? 
                <View style={styles.bannerSearch}>
                    <Icon name='search' style={{flex: 1, paddingLeft: 10,  color: 'rgba(46, 149, 46, 1)', fontSize: 15}}></Icon>
                    <TextInput
                     name="search"
                     placeholder='Tìm kiếm'
                     value={search}
                     onChangeText={(text) => setSearch(text)}
                     style={{flex:6, padding: 0,}}>
                    </TextInput>
                    <View style={{flexDirection: 'row',flex: 2, justifyContent:'space-around', alignItems: 'center' }}>
                    <Text style={{ color: 'rgba(46, 149, 46, 1)', fontSize: 20}} onPress={()=>setSearch('')} >-</Text>
                    <Text style={{ color: 'rgba(46, 149, 46, 1)', fontSize: 15}} onPress={()=>{setIsShowSearch(false)}}>đóng</Text>
                    </View>
                </View>:null     
                }
            </View>
        </View>
    );
};