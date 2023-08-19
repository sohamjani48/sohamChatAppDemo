import {StyleSheet, View, TextInput, Image, Pressable} from 'react-native';
import React, {useState} from 'react';

import AttachmentIcon from '../assets/icons/AttachmentIcon.png';
import MoodIcon from '../assets/icons/MoodIcon.png';
import CameraIcon from '../assets/icons/CameraIcon.png';
import MicIcon from '../assets/icons/MicIcon.png';
import SendIcon from '../assets/icons/SendIcon.png';

import HeaderIcon from './HeaderIcon';

const MessageComposeArea = props => {
  const {userMessages, setUserMessages} = props;

  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setUserMessages?.([
        ...userMessages,
        {
          messageContent: inputText,
          messageType: 'text',
          messageTime: '9:40 AM',
          sender: 'user',
        },
      ]);
      setInputText('');
    }
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.container}>
        <HeaderIcon source={MoodIcon} />
        <TextInput
          value={inputText}
          onChangeText={text => setInputText(text)}
          placeholder="Message..."
          style={styles.input}
          onSubmitEditing={handleSendMessage}
          placeholderTextColor={'#9C9B9B'}
        />
        <View style={styles.iconContainer}>
          <HeaderIcon source={AttachmentIcon} />
          <HeaderIcon source={CameraIcon} />
        </View>
      </View>
      <Pressable
        onPress={() => {
          inputText.length > 0 && handleSendMessage();
        }}>
        <Image
          source={inputText.length > 0 ? SendIcon : MicIcon}
          style={{width: 42, height: 42, marginLeft: 8}}
        />
      </Pressable>
    </View>
  );
};

export default MessageComposeArea;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  input: {
    flex: 3,
    maxHeight: 100,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderColor: '#ccc',
    borderRadius: 20,
    color: 'black',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
});
