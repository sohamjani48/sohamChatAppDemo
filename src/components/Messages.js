import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';

const Messages = props => {
  const {userMessages} = props;

  const flatListRef = useRef(null);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({animated: true});
    }
  }, [userMessages]);

  const MessageBubble = ({message, isUser}) => (
    <View
      style={[
        styles.messageContainer,
        isUser ? styles.userMessageContainer : styles.otherMessageContainer,
      ]}>
      <Text style={styles.messageContent}>{message.messageContent}</Text>
      <Text
        style={[
          styles.messageTime,
          isUser ? styles.messageTimeUser : styles.messageTimeOtherUser,
        ]}>
        {message.messageTime}
      </Text>
    </View>
  );

  const renderItem = ({item}) => {
    const isUser = item.sender === 'user';
    return <MessageBubble message={item} isUser={isUser} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={userMessages}
        renderItem={renderItem}
        style={styles.messageList}
        onContentSizeChange={() => {
          flatListRef.current.scrollToEnd({animated: true});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  messageContainer: {
    maxWidth: '70%',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  userMessageContainer: {
    backgroundColor: '#E4FFDF',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingRight: 12,
    paddingLeft: 10,
    paddingVertical: 8,
    marginRight: 16,
    marginVertical: 8,
    justifyContent: 'flex-end',
  },
  otherMessageContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ECECEC',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginRight: 'auto',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginLeft: 16,
    marginVertical: 8,
    justifyContent: 'flex-end',
  },
  messageContent: {
    color: 'black',
  },
  messageTime: {
    fontSize: 10,
    color: '#1C1B1F',
    alignSelf: 'flex-end',
    marginTop: 4,
    marginLeft: 8,
    justifyContent: 'flex-end',
  },
  messageList: {
    marginVertical: 12,
  },
  messageTimeUser: {
    color: '#1C1B1F',
  },
  messageTimeOtherUser: {
    color: '#9C9B9B',
  },
});

export default Messages;
