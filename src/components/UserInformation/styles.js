import { StyleSheet } from 'react-native';

import { BODY_BACKGROUND, NAME_TEXT_COLOR } from '../../constants';

const styles = StyleSheet.create({
  container: {
  },
  avatarContainer: {
    width: '100%',
  },
  avatarImage: {
    height: 50,
    width: 50,
    margin: 5,
    borderRadius: 25,
  },
  topInformationText: {
    color: NAME_TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: 32,
  },
  bottomInformationText: {
    fontSize: 16,

  },
});

export default styles;
