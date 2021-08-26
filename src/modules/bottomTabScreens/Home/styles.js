import {StyleSheet} from 'react-native';
import {vw, vh, normalize} from '../../../dimension';
export default StyleSheet.create({
  heading: {
    marginHorizontal: vw(10),
    marginVertical: vh(10),
    fontSize: normalize(16),
  },
  mainContainer: {
    marginTop: normalize(20),
  },
  shoeTrends: {
    width: vw(356),
    alignSelf: 'center',
    height: vh(166),
  },
  shoeTrendsInner: {
    width: vw(172),
    height: vh(140),
  },
  shoeTrendsImage: {
    width: vw(173),
    height: vh(140),
  },
  textView: {
    width: '100%',
    alignItems: 'center',
    marginVertical: vh(6),
  },
  titleText: {
    color: 'gray',
    fontSize: normalize(11),
  },
  titleSubText: {
    color: 'gray',
    fontSize: normalize(10),
  },
  sectionHeading: {
    textTransform: 'uppercase',
    fontSize: vh(17),
    marginLeft: vw(10),
    marginBottom: vh(10),
  },
  langIconBox: {
    backgroundColor: '#eee',
    height: vh(60),
    width: vw(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(30),
    position: 'absolute',
    right: vw(20),
    bottom: vh(40),
  },
  langIcon: {
    height: vh(30),
    width: vw(30),
  },
});
