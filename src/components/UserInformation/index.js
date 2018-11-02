/* eslint-disable camelcase */
import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

// Styles
import styles from './styles';

export default class UserInformation extends React.Component {
  static propTypes = {
    taskCount: PropTypes.number,
    userData: PropTypes.object.isRequired,
  }

  static defaultProps = {
    taskCount: undefined,
  };

  getStrings = (firstName, taskCount) => {
    if (taskCount) {
      if (taskCount === 0) {
        return ({
          top: `Hi ${firstName}!`,
          bottom: 'No tasks for today!',
        });
      }
      return ({
        top: `Hi ${firstName},`,
        bottom: `You have ${taskCount} to catch up on today!`,
      });
    }
    return ({
      top: `Hi ${firstName}!`,
      bottom: '',
    });
  }

  render() {
    const {
      taskCount,
      userData: { avatar, first_name },
    } = this.props;

    const { top, bottom } = this.getStrings(first_name, taskCount);
    return (
     <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image
            resizeMode={'contain'}
            source={{ uri: avatar }}
            style={styles.avatarImage}
          />
       </View>
      <Text style={styles.topInformationText}>
        {top}
      </Text>
      <Text style={styles.bottomInformationText}>
        {bottom}
      </Text>
     </View>
    );
  }
}
