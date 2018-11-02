import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

// Styles
import styles from './styles';
import { ACTIVITY_INDICATOR_COLOR } from '../../constants';

// Components
import { UserInformation, TaskCard } from '../../components';

export default class HomeSceen extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    tasks: PropTypes.array,
  }

  static defaultTypes = {
    user: null,
    tasks: [],
  }

  renderActivityIndicator = () => (
    <View style={styles.activityIndicatorContainer}>
      <ActivityIndicator
        size="large"
        color={ACTIVITY_INDICATOR_COLOR}
      />
    </View>
  );

  renderTaskCard = (item, index) => (
    <TaskCard
      key={index}
      data={item}
    />
  )

  renderTaskList = (tasklist) => {
    if (tasklist) {
      return (
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollViewTasks}
        >
          {tasklist.map(this.renderTaskCard)}
        </ScrollView>
      );
    }
    return null;
  }

  renderUserView = (userData) => {
    const { tasks } = this.props;
    return (
      <View style={styles.userDataContainer}>
        <View style={styles.userDataInformationContainer}>
          <UserInformation
            taskCount={tasks ? tasks.length : undefined}
            userData={userData}
          />
        </View>
        <View style={styles.tasksScrollContainer}>
          {this.renderTaskList(tasks)}
        </View>
      </View>
    );
  }

  render() {
    const { user } = this.props;
    return (
      <View style={styles.container}>
        {user
          ? this.renderUserView(user)
          : this.renderActivityIndicator()}
      </View>
    );
  }
}
