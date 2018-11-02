import { StyleSheet, Platform } from 'react-native';

import {
  TAG_COLOR,
  TAG_COLOR_FIRST,
} from '../../constants';

const styles = StyleSheet.create({
  container: {
    height: 170,
    width: 170,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginRight: 10,
    padding: 20,
    justifyContent: 'space-between',
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
      },
    }),
  },
  tagListContainer: {
    flexDirection: 'row',
  },
  descriptionText: {
    fontSize: 14,
    color: 'darkgrey',
  },
  nameText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryTagStyle: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    marginRight: 5,
    borderRadius: 3,
    backgroundColor: TAG_COLOR,
  },
  categoryTagFirst: {
    backgroundColor: TAG_COLOR_FIRST,
  },
  tagTitle: {
    color: 'white',
  },
});

export default styles;
