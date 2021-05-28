import React, { useState } from 'react';
import { Alert, Button, Modal, Text, TextInput, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import firestore from '@react-native-firebase/firestore';
import { styles } from './styles';

const AddBirthday: React.FC = () => {
  const [name, setName] = useState('');
  const [modalVisibilityBirth, setModalVisibilityBirth] = useState(false);
  const [dateInput, setDateInput] = useState('');
  const [date, setDate] = useState(new Date());

  const handleAdd = () => {
    if (name != '' && dateInput.length > 0) {
      firestore()
        .collection('Birthdays')
        .add({
          name: name,
          birthday: date,
          date_time_saved: new Date()
        })
        .then(() => {
          console.log('Birthday add!');
          setName('');
          setDateInput('');
          setDate(new Date());
        });
    } else {
      Alert.alert('Erro',
        'Fill in all fields',
      );
    }
  }

  return (
    <View style={styles.row}>
      <View style={styles.column}>
        <TextInput
          style={styles.input}
          placeholder='Name'
          value={name}
          onChangeText={(e: string) => setName(e)}
        />
        <TextInput
          style={styles.input}
          placeholder='Birthday'
          value={dateInput}
          onPressIn={() => setModalVisibilityBirth(true)}
          editable={false}
        />
      </View>
      <Button
        title='Add'
        onPress={() => {
          handleAdd();
        }} />
      {/* Add a date */}
      <Modal
        animationType="slide"
        visible={modalVisibilityBirth}
        transparent
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Date</Text>
            <DatePicker
              mode='date'
              date={date}
              onDateChange={setDate}
            />
            <Button
              title='Confirm'
              onPress={() => {
                setDateInput(date.toLocaleDateString());
                setModalVisibilityBirth(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default AddBirthday;