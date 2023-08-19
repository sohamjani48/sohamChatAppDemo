import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ProfileHeader = props => {
  const {name, lastSeen, profileImageUrl} = props;

  return (
    <View
      style={{marginHorizontal: 8, flexDirection: 'row', alignItems: 'center'}}>
      <Image
        source={{
          uri: profileImageUrl,
        }}
        style={{width: 48, height: 48, borderRadius: 24}}
        resizeMode="contain"
      />
      <View style={{marginLeft: 12}}>
        <Text style={{color: 'black', fontWeight: 900, fontSize: 18}}>
          {name}
        </Text>
        <Text style={{color: '#9C9B9B', fontWeight: 200, fontSize: 12}}>
          {`Last Seen ${lastSeen}`}
        </Text>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({});
