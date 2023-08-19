import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import ChatHeader from '../components/ChatHeader';
import Messages from '../components/Messages';
import MessageComposeArea from '../components/MessageComposeArea';
import {messages} from '../consts/consts';

const UserChat = () => {
  const [userMessages, setUserMessages] = useState(messages);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <ChatHeader />
      <Messages userMessages={userMessages} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.messageComposeContainer}>
        <MessageComposeArea
          userMessages={userMessages}
          setUserMessages={setUserMessages}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  messageComposeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 18,
    backgroundColor: '#EEEEEE',
  },
});

export default UserChat;
