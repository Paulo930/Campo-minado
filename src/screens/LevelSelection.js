import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';
import ButtonLevel from '../components/ButtonLevel';

export default props => {
  return (
    <Modal
      onRequestClose={props.onCancel}
      visible={props.isVisible}
      animationType="slide"
      transparent={true}>
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione o Nível</Text>
          <ButtonLevel
            label="Fácil"
            onLevelSelected={props.onLevelSelected}
            styleLevel={styles.bgEasy}
            level={0.1}
          />
          <ButtonLevel
            label="Intermediário"
            onLevelSelected={props.onLevelSelected}
            styleLevel={styles.bgNormal}
            level={0.2}
          />
          <ButtonLevel
            label="Difícil"
            onLevelSelected={props.onLevelSelected}
            styleLevel={styles.bgHard}
            level={0.3}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  bgEasy: {
    backgroundColor: '#49b65d',
  },
  bgNormal: {
    backgroundColor: '#2765f7',
  },
  bgHard: {
    backgroundColor: '#f26337',
  },
});
