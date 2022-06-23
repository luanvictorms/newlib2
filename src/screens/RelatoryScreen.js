import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  PermissionsAndroid,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';

import {useState, useEffect} from 'react';

export default function RelatoryScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(true);

  const goToDetails = (id) => {
    navigation.navigate('RelatoryDetails', {id});
  };

  const renderRelatory = () => (
    <SafeAreaView style={styles.container}>

      renderItem={renderItem}

    </SafeAreaView>
  );
  
  const renderItem = () => (
    <View style={styles.headerList}>
      <TouchableOpacity onPress={() => goToDetails(0)}>
        <View style={styles.headerItem}>
          <Text style={styles.headerTitle}> RFID: </Text>
          <Text style={styles.headerValue}>000001,</Text>
          <Text style={styles.headerTitle}> R.A: </Text>
          <Text style={styles.headerValue}>321120002</Text>
          <Text style={styles.headerTitle}> Usuario: </Text>
          <Text style={styles.headerValue}>Luan Victor, </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToDetails(1)}>
        <View style={styles.headerItem}>
          <Text style={styles.headerTitle}> RFID: </Text>
          <Text style={styles.headerValue}>000002,</Text>
          <Text style={styles.headerTitle}> R.A: </Text>
          <Text style={styles.headerValue}>321122002</Text>
          <Text style={styles.headerTitle}> Usuario: </Text>
          <Text style={styles.headerValue}>Victor Fagundes, </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToDetails(1)}>
        <View style={styles.headerItem}>
          <Text style={styles.headerTitle}> RFID: </Text>
          <Text style={styles.headerValue}>000003,</Text>
          <Text style={styles.headerTitle}> R.A: </Text>
          <Text style={styles.headerValue}>321130402,</Text>
          <Text style={styles.headerTitle}> Usuario: </Text>
          <Text style={styles.headerValue}>Alex Miranda </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.body}>

      <Image
        style={styles.bigLogo}
        source={require('../assets/logoSmartLib.png')}
      />
      <Text style={styles.logoTitle}>Smart Lib</Text>
      <Text style={styles.logoTitle}>Management Tool</Text>
      <View style={styles.separator} />
      renderRelatory()

    </View>
  )
}

const styles = StyleSheet.create({
  tabList: {
    width: '80%',
    height: '80%',
  },
  headerList: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  headerItem: {
    padding: 5,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F3F4F6',
    borderWidth: 5,
    borderRadius: 10,
    borderColor: '#4B5563',
  },
  headerTitle: {
    color: '#4B5563',
    fontSize: 20,
    textAlign: 'center',
  },

  activeTabItem: {
    padding: 5,
    margin: 5,
    borderBottomColor: '#4B5563',
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  desactiveTabItem: {
    padding: 5,
    margin: 5,
    color: '#F9FAFB',
  },

  activeTabTitle: {
    color: '#374151',
    fontSize: 20,
    textAlign: 'center',
  },
  desactiveTabTitle: {
    color: '#4B5563',
    fontSize: 20,
    textAlign: 'center',
  },

  headerValue: {
    color: '#1F2937',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  itemList: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 5,
    margin: 5,
    backgroundColor: '#F3F4F6',
    borderWidth: 5,
    borderRadius: 10,
    borderColor: '#4B5563',
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 4,
  },
  itemTitle: {
    color: '#4B5563',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  itemValue: {
    color: '#1F2937',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'justify',
  },

  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E7EB',
  },
  info: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E7EB',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'justify',
    color: '#4B5563',
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoTitle: {
    textAlign: 'left',
    color: '#4B5563',
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    backgroundColor: '#1F2937',
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  flatItem: {
    padding: 5,
    margin: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigLogo: {
    margin: 5,
    width: 150,
    height: 150,
  },
});
