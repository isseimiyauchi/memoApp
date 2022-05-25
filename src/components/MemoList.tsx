import React from "react";
import { StyleSheet, Text,  View, TouchableOpacity, Alert } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  MemoDetail: undefined;
};

export default function memoListItem() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'MemoDetail'>>();
  return(
    <View>
       <TouchableOpacity 
         style={styles.memoListItem}
         onPress={() => { navigation.navigate('MemoDetail'); }}
       >
          <View>
            <Text style={styles.memoListItemTytle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
          </View>
          <TouchableOpacity onPress={() => { Alert.alert('Are you sure?'); }}>
            <Feather name="x" size={16} color='#B0B0B0' />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity 
         style={styles.memoListItem}
         onPress={() => { navigation.navigate('MemoDetail'); }}
       >
          <View>
            <Text style={styles.memoListItemTytle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
          </View>
          <TouchableOpacity onPress={() => { Alert.alert('Are you sure?'); }}>
            <Feather name="x" size={16} color='#B0B0B0' />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity 
         style={styles.memoListItem}
         onPress={() => { navigation.navigate('MemoDetail'); }}
       >
          <View>
            <Text style={styles.memoListItemTytle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
          </View>
          <TouchableOpacity onPress={() => { Alert.alert('Are you sure?'); }}>
            <Feather name="x" size={16} color='#B0B0B0' />
          </TouchableOpacity>
        </TouchableOpacity>

        
      </View>
  );
}

const styles =StyleSheet.create ({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTytle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 32,
    color: '#848484',
  },
})