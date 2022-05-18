import React from "react";
import { StyleSheet, Text,  View, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";

export default function memoListItem() {
  return(
    <View>
       <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTytle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
          </View>
          <TouchableOpacity>
            <Feather name="x" size={16} color='#B0B0B0' />
          </TouchableOpacity>
        </View>

        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTytle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
          </View>
          <TouchableOpacity>
            <Feather name="x" size={16} color='#B0B0B0' />
          </TouchableOpacity>
        </View>

        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTytle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
          </View>
          <TouchableOpacity>
            <Feather name="x" size={16} color='#B0B0B0' />
          </TouchableOpacity>
        </View>
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