import { StyleSheet } from 'react-native';

import { colors, metrics, general } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: metrics.baseMargin,
  },

  logo: {
    width: metrics.screenWidth * 0.3,
    height: metrics.screenWidth * 0.3,
    marginBottom: metrics.baseMargin,
  },

  box: {
    ...general.box,
    alignSelf: 'stretch',
  },

  userInfo: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  id: {
    fontSize: 12,
    color: colors.regular,
    marginTop: metrics.baseMargin / 2,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: metrics.baseMargin / 2,
  },

  email: {
    fontSize: 16,
    color: colors.primaryLight,
    marginVertical: metrics.baseMargin / 2,
  },

  error: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.danger,
    marginBottom: metrics.baseMargin / 2,
  },

  buttonContainer: {
    padding: metrics.basePadding,
    backgroundColor: colors.secundary,
    borderRadius: metrics.baseRadius,
    alignSelf: 'stretch',
  },

  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

  spinner: {
    color: colors.primary,
  },
});

export default styles;
