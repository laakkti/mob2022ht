import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
//import { getBatteryLevel } from 'react-native-device-info';
import DeviceInfo from 'react-native-device-info';

const App: () => Node = () => {
  //[UIDevice currentDevice].batteryMonitoringEnabled = true;

  const [batteryLevel, setBatteryLevel] = useState(0);
  const [usedMemory, setUsedMemory] = useState(0);
  const [totalMemory, setTotalMemory] = useState(0);
  const [ipAddress, setIpAddress] = useState(0);

  /*const getBatteryLevel = async () => {
    
    return await DeviceInfo.getBatteryLevel();  

  };*/

  const getIpAddress=()=>{
    DeviceInfo.getIpAddress().then(ip => {
      setIpAddress(ip);
    }).catch(err => {
      console.log(err);
    }).done();
  }

  const getBatteryLevel = () => {
    DeviceInfo.getBatteryLevel().then(val => {
      setBatteryLevel(val);
    });
  };

  const getUsedMemory = () => {
    DeviceInfo.getUsedMemory().then(val => {
      setUsedMemory(val);
    });
  };

  const getTotalMemory = () => {
    DeviceInfo.getTotalMemory().then(val => {
      setTotalMemory(val);
    });
  };

  /*
  const getBatteryLevel = () => {
    
    //const bl=await DeviceInfo.getBatteryLevel();
    //return bl;
    console.log("getting...");
    DeviceInfo.getBatteryLevel().then(batteryLevel => {
      //console.log(batteryLevel);
      return batteryLevel;
    });
  };*/

  //let loc = null;

  let bl = 'XXXX';

  useEffect(() => {
    /*
    const getBatteryLevel = async() => {
    
      return await DeviceInfo.getBatteryLevel();    
  
    };*/

    //bl=getBatteryLevel();
    //console.log(bl);
    /*
      bl=DeviceInfo.getBatteryLevel().then(batteryLevel => {
        console.log("#1 "+batteryLevel);
        return batteryLevel;
      });
      console.log("#2 "+bl);*/
    /*
      bl=getBatteryLevel();
      for(let item in bl){
        console.log("#11 "+item);
      }
      setBatteryLevel(bl.toString());
      */
    /*DeviceInfo.getBatteryLevel().then(val => {
        console.log("#1 "+val);
        setBatteryLevel(val);
      });*/

    getBatteryLevel();
    getUsedMemory();
    getTotalMemory();
    getIpAddress();
    //bl.then(function(val) {
    //console.log(val);
    //});
    console.log('#3 ' + bl);
  }, []);

  const handleClick = () => {
    console.log("####");
    getBatteryLevel();    
  };

  return (
    <View style={styles.main}>
      <Text>{batteryLevel}</Text>
      <Text>{usedMemory}/{totalMemory}</Text>
      <Text>{ipAddress}</Text>
      <Button title="batterylevel" onPress={handleClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default App;
