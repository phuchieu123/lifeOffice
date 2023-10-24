import React,{useState, useEffect} from 'react';
import {View, Text, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { Button, Spinner} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
function split(array, n) {
    let [...arr] = array;
    let res = [];
    while (arr.length) {
      res.push(arr.splice(0, n));
    }
    return res;
  }

export default DashBoardBos = () => {
    const [configs, setConfigs] = useState([])
    useEffect(() => {
        if (Array.isArray(kanbanTaskConfigs)) {
          const data = split(kanbanTaskConfigs, 3)
          if (data.length > 1 && data[data.length - 1].length === 1) {
            data[data.length - 1].push(data[data.length - 2][2])
            data[data.length - 2].pop()
          }
          setConfigs(data)
        
        }
      }, [kanbanTaskConfigs]);
    
  
  const kanbanTaskConfigs=[
    {
    id: 1,
    name: 'Công việc mới',
    count: '11'
  },
  {
    id: 2,
    name: 'Đang thực hiện',
    count: '11'
  },
  {
    id: 3,
    name: 'Retest',
    count: '11'
  },
  {
    id: 4,
    name: 'Pass',
    count: '11'
  },
  {
    id: 5,
    name: 'Công việc mới',
    count: '11'
  },
  {
    id: 6,
    name: 'Công việc mới',
    count: '11'
  },
  {
    id: 7,
    name: 'Công việc mới',
    count: '11'
  },
  {
    id: 8,
    name: 'Công việc mới',
    count: '11'
  },
  {
    id: 9,
    name: 'Công việc mới',
    count: '11'
  },
  {
    id: 10,
    name: 'Công việc mới',
    count: '11'
  },
]

  return (

    <View>
      <View style={styles.view}>
        <Button
        small rounded block
          style={{width: '100%', marginVertical: 2,flexDirection: 'column', borderRadius: 15,paddingHorizontal: 5, backgroundColor:'rgba(46, 149, 46, 1)' }}
      //   onPress={handleGetTask}
        >
         <Text style={{textAlign: 'center',color:'white', width:'100%', }}>Công việc</Text>
        <Ionicons
            name="reload"
            style={{position: 'absolute', right: 0, color: '#fff'}}
          />
         
        </Button>
        
      </View>

      
      {/* <View >
        {configs.map((config, index) => {
          return (
            <View style={styles.view} key={`CHKD_${index}`}>
              {config.map(e => (
                <CustomButton key={e.id} kanban={e} />
              ))}
            </View>
          );
        })}
      </View> */}
    </View>
  );
};

const CustomButton = props => {
  const {kanban} = props;
  // const navigation = useNavigation();
//   const [text, setText] = useState(0);
//   useEffect(() => {
//     if (reportTask && Array.isArray(reportTask.data)) {
//       const obj = reportTask.data.find(item => item.type === kanban.type);

//       if (obj && obj.count) {
//         setText(obj.count);
//       }
//     }
//   }, [kanban, reportTask]);

  // const handleGotoPage = params => {
  //   navigation.navigate('Project', params);
  // };
  return (
    <TouchableOpacity
      style={styles.button}
      // onPress={() => handleGotoPage({kanbanStatus: kanban.type})}
      >
      <Text style={{...styles.textButton, color: 'green'}}>
        {kanban.count || 0}
      </Text>
      <Text style={styles.textNote}>{kanban.name}</Text>
    </TouchableOpacity>
  );
}; 


const styles = StyleSheet.create({
    view: {
      flex: 1,
      flexDirection: 'row',
      position: 'relative'
    },
    buttonView: {
      backgroundColor: 'white',
      borderRadius: 15,
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    button: {
      flex: 1,
      flexDirection: 'column',
      height: 'auto',
      borderRadius: 15,
      backgroundColor: 'white',
      margin: 3,
      height: 100,
      paddingHorizontal: 5,
    },
    textButton: {
      color: 'black',
      marginBottom: 10,
      marginTop: 18,
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    textNote: {
      color: 'black',
      marginBottom: 10,
      fontSize: 10,
      textAlign: 'center',
    },

    textNote_2: {
      color: 'black',
      fontSize: 12,
      paddingTop: 10,
      paddingBottom: 10,
      textAlign: 'center',
      margin: 3,
    },
  });
