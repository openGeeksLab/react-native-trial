import { StyleSheet } from 'react-native';

import { BODY_BACKGROUND } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BODY_BACKGROUND,
  },
  userDataInformationContainer: {
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  tasksScrollContainer: {
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userDataContainer: {
    flex: 1,
  },
  scrollViewTasks: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    height: 180,
    width: '100%',
  },
});

export default styles;
