import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';

import {
  getTasksList,
  getUserInformation,
} from '../../actions';
import { checkNeedUpdateCache } from '../../utils';
// Screen View
import HomeScreen from './home';

@connect(state => ({
  userInfo: state.user,
  taskInfo: state.tasks,
}), {
  getUserInformationAction: getUserInformation,
  getTasksListAction: getTasksList,
})
class HomeContainer extends React.Component {
  static propTypes = {
    userInfo: PropTypes.object.isRequired,
    taskInfo: PropTypes.object.isRequired,
    getTasksListAction: PropTypes.func.isRequired,
    getUserInformationAction: PropTypes.func.isRequired,
  }

  static defaultTypes = {
    userInfo: {},
    taskInfo: {},
  }

  static getDerivedStateFromProps(props, state) {
    const { userInfo } = props;
    if (userInfo.user) {
      Actions.refresh({ title: userInfo.user.first_name });
    }
    return state;
  }

  componentDidMount() {
    const { userInfo, taskInfo } = this.props;

    if (checkNeedUpdateCache(userInfo.cacheTime)) {
      this.refreshUserData();
    }
    if (checkNeedUpdateCache(taskInfo.cacheTime)) {
      this.refreshTasksData();
    }
  }

  refreshTasksData = () => {
    const { getTasksListAction } = this.props;
    getTasksListAction();
  }

  refreshUserData = () => {
    const { getUserInformationAction } = this.props;
    getUserInformationAction();
  }

  render() {
    const {
      userInfo: { user },
      taskInfo: { tasks },
    } = this.props;
    console.log(this.props);
    return (
      <HomeScreen
        user={user}
        tasks={tasks}
      />
    );
  }
}

export default HomeContainer;
