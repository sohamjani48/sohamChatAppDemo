import {StyleSheet, View, Platform} from 'react-native';
import React from 'react';

import ArrowBackIcon from '../assets/icons/ArrowBackIcon.png';
import VideoIcon from '../assets/icons/VideoIcon.png';
import CallIcon from '../assets/icons/CallIcon.png';
import ThreeDotsIcon from '../assets/icons/ThreeDotsIcon.png';
import HeaderIcon from './HeaderIcon';
import ProfileHeader from './ProfileHeader';

const ChatHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <HeaderIcon source={ArrowBackIcon} />
        <ProfileHeader
          name={'Soham'}
          lastSeen={'12:40 AM'}
          profileImageUrl={
            'https://media.licdn.com/dms/image/D4D03AQGDgVfpw0PQPw/profile-displayphoto-shrink_800_800/0/1685566045730?e=2147483647&v=beta&t=L4F2bfhVtTj_HH6SBNvlMsxA1z2pGgN9WgcmCkOJvLY'
          }
        />
      </View>
      <View style={styles.iconContainer}>
        <HeaderIcon source={VideoIcon} />
        <HeaderIcon source={CallIcon} />
        <HeaderIcon source={ThreeDotsIcon} />
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    justifyContent: 'space-between',
    marginTop: 4,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
    }),
  },
  profileContainer: {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
});
