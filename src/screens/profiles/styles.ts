import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    ...theme.typography.h2,
    color: theme.colors.black,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  topBar: {
    backgroundColor: theme.colors.primary,
    height: 100,
    width: 400,
    justifyContent: 'center',
  },
  profilePic: {
    height: 120,
    width: 120,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: theme.colors.white,
    margin: 20,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 15,
    marginTop: -15,
  },
  logo: {
    alignSelf: 'flex-start',
  },
  cog: {
    alignSelf: 'flex-end',
    width: 24,
    height: 24,
  },
  profInfo: {
    paddingBottom: 20,
  },
  profName: {
    ...theme.typography.h2,
    alignSelf: 'center',
    paddingBottom: 20,
  },
  profNumbers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 100,
    paddingBottom: 25,
  },
  numbers: {
    alignSelf: 'center',
  },
  numHeaders: {
    color: theme.colors.gray[600],
    fontSize: 16,
  },
  segments: {
    height: 50,
    ...theme.typography.h2,
    backgroundColor: theme.colors.white,
    
  },
  content: {
    paddingVertical: 20,
    
  }
});

export default styles;
