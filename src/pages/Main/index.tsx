import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';

import { useAuth } from '../../hooks/auth';

import CardBirthday from '../../components/CardBirthday';
import AddBirthday from '../../components/AddBirthday';

import { styles } from './styles';

const Main: React.FC = () => {
  const { signOut } = useAuth();
  const [birthdays, setBirthdays] = useState([])
  const birthdaysRef = firestore().collection('Birthdays')

  useEffect(() => {
    birthdaysRef
      .orderBy('birthday', 'desc')
      .onSnapshot(
        querySnapshot => {
          const newBirthdays: any = []
          querySnapshot.forEach(doc => {
            const birthday = doc.data()
            birthday.id = doc.id
            newBirthdays.push(birthday)
          });
          setBirthdays(newBirthdays)
        },
        error => {
          console.log(error)
        }
      )
  }, [])

  const cardBirthComponent = birthdays.map((data, index) => (
    <CardBirthday query={data} key={index} />
  ));

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.titulo}>Birthdays</Text>
        </View>
        <TouchableOpacity
          style={styles.logOut}
          onPress={() => {
            signOut();
          }}>
          <Text style={styles.logOut}>LogOut</Text>
        </TouchableOpacity>
      </View>
      <AddBirthday />
      <View style={styles.main}>
        <ScrollView>
          {cardBirthComponent}
        </ScrollView>
      </View>
    </View>
  );
}

export default Main;