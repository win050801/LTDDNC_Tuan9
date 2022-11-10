import { StatusBar } from 'expo-status-bar';
import { useRef, useState ,useEffect } from 'react';
import { Animated, StyleSheet, Text, View,Alert } from 'react-native';
import { Button, Image } from 'react-native';
import icon from './assets/cat.png'
import chuot from './assets/chuot.png'


export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const[count,setcount]=useState(0)
  const [location, setLocation] 
      = useState({
        x: null,
        y: null,
        marginLeft: new Animated.Value(100),
        marginTop: new Animated.Value(100)
      });

      const [locationchuot, setLocationchuot] 
      = useState({
        x: null,
        y: null,
        marginLeftchuot: new Animated.Value(200),
        marginTopchuot: new Animated.Value(200)
      });

  function onPress(evt){
       
    
    console.log('====================================');
      var x = evt.nativeEvent.pageX;
      console.log('====================================');
      console.log(evt.nativeEvent.target);
      var id = evt.nativeEvent.target
      console.log('====================================');
      var y = evt.nativeEvent.pageY;
      console.log('====================================');
      console.log("y : "+y);
      console.log("count : "+ count);
      if(count<3)
      {

        if(id===7)
        {
          setcount(count+1)
          setLocation({
            x: x,
            y: y,
            marginLeft:x-25,
            marginTop: y-35
          })
        
          var RandomNumber = Math.floor(Math.random() * 300) + 2 ;
          var RandomNumber1 = Math.floor(Math.random() * 500) + 2 ;
          setLocationchuot({
            x: 0,
            y: 0,
            marginLeftchuot:RandomNumber,
            marginTopchuot: RandomNumber1
          })
          
        }
        else{
          setLocation({
            x: x,
            y: y,
            marginLeft:x-25,
            marginTop: y-35
          })
        }
        
      }
      else{
        setLocation({
          x: x,
          y: y,
          marginLeft:x-25,
          marginTop: y-35
        })
  
      var RandomNumber = Math.floor(Math.random() * 300) + 2 ;
      var RandomNumber1 = Math.floor(Math.random() * 500) + 2 ;
      setLocationchuot({
        x: 0,
        y: 0,
        marginLeftchuot:x-25,
        marginTopchuot: y-28
      })
      Alert.alert("Chuc mung ban")
      setcount(0)
      }
      
    
    
    
  }
  function onMove(evt){
    
    console.log('====================================');
    console.log(location);
    console.log('====================================');
    //setLocation({marginLeft: x, marginTop: y })
  }
  function onRelease(){
    console.log("Realse!");
  }
  
      
  const {marginTop, marginLeft} = location;
  const {marginTopchuot, marginLeftchuot} =locationchuot;
  return (
    <View
      onStartShouldSetResponder={()=>true}
      onMoveShouldSetResponder= {()=>true}
      onResponderGrant={onPress}

      onResponderRelease = {onRelease}
      style={styles.container}>

      <Text>Show something!</Text>
     
      
      <Animated.Image
       source = {chuot}
       style={{marginLeft: marginLeftchuot, marginTop: marginTopchuot,width:50,height:50,position: 'absolute',left:     0, top:      0,}}
       >
      </Animated.Image>
      <Animated.Image
        
       source = {icon}
       style={{marginLeft: marginLeft, marginTop: marginTop,width:50,height:50}}
       >
      </Animated.Image>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position:'relative',
    flex: 1
  },
});
