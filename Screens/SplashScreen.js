import React from "react";


export default function SplashScreen(){
    return(
        <View style={styles.container}>
      
      <Text style ={styles.logoText}>Let's Buy</Text>
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6E6F6',
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText:{
     fontSize: 40 ,
     fontWeight: 'bold',
     textShadowColor:"white",
     paddingBottom:20,
     textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,
  },
  logo:{
    width:100,
    height:100
  }
});
