import React, { useState } from 'react';
import { Button, Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { styles } from './styles';
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';

const CardBirthday = ({ query }) => {
  const [date, setDate] = useState(new Date(query.birthday.toDate()));
  const [value, setValue] = useState(query.name);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalVisibilityBirth, setModalVisibilityBirth] = useState(false);
  const birthdayRef = firestore().collection('Birthdays').doc(query.id)


  const updateFirestore = (value) => {
    switch (typeof value) {
      case 'string':
        birthdayRef
          .update({
            name: value
          })
          .then(() => {
            console.log('Name updated!');
          });
        break
      case 'object':
        birthdayRef
          .update({
            birthday: value
          })
          .then(() => {
            console.log('Name updated!');
          });
        break
    }
  }

  const deleteFromFirestore = () => {
    birthdayRef.delete().then(() => {
      console.log('Birthday deleted!');
    });
  }

  return (
    <>
      <View style={styles.card}>
        <View>
          <TouchableOpacity
            onPress={() => {
              setModalVisibility(true);
            }}>
            <Text style={styles.textLabel}>Name</Text>
            <Text style={styles.textName}>{query.name}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setModalVisibilityBirth(true);
          }}>
            <Text style={styles.textLabel}>Birthday</Text>
            <Text style={styles.textBirthday}>{new Date(query.birthday.toDate()).toDateString()}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            deleteFromFirestore()
          }}>
          <Image
            source={require('../../assets/delete.png')}
          />
        </TouchableOpacity>
      </View>
      {/* Change Name */}
      <Modal
        animationType="slide"
        visible={modalVisibility}
        transparent
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>{`Update Name`}</Text>
            <TextInput
              style={styles.input}
              placeholder='Name'
              value={value}
              onChangeText={(e: string) => {
                setValue(e)
              }}
            />
            <Button
              title='Confirm'
              onPress={() => {
                setModalVisibility(false);
                updateFirestore(value);
              }}
            />
          </View>
        </View>
      </Modal>
      {/* Change Date */}
      <Modal
        animationType="slide"
        visible={modalVisibilityBirth}
        transparent
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Update Date</Text>
            <DatePicker
              mode='date'
              date={date}
              onDateChange={setDate}
            />
            <Button
              title='Confirm'
              onPress={() => {
                setModalVisibilityBirth(false);
                updateFirestore(date);
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}

export default CardBirthday;