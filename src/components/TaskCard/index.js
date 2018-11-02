/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

// Styles
import styles from './styles';

export default class TaskCard extends React.Component {
  static propTypes = {
    taskCount: PropTypes.number,
    userData: PropTypes.object,
  }

  static defaultProps = {
    taskCount: undefined,
  };

  renderTags = (tags) => {
    if (tags) {
      return (tags.map((item, index) => (
        <View
          key={`tag-index-${index}`}
          style={[
            styles.categoryTagStyle,
            index === 1 ? styles.categoryTagFirst : undefined,
          ]}
        >
          <Text style={styles.tagTitle}>
            {item}
          </Text>
        </View>
      )));
    }
    return null;
  }

  render() {
    const {
      data: {
        tags,
        name,
        subtitle,
      },
    } = this.props;
    return (
      <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.nameText}>
          {name}
          </Text>
        </View>
        <View>
          <Text style={styles.descriptionText}>
          {subtitle}
          </Text>
        </View>
      </View>
        <View style={styles.tagListContainer}>
          {this.renderTags(tags)}
        </View>
      </View>
    );
  }
}
