import {StyleSheet} from 'react-native';
import {vw, vh, normalize} from '../../../../dimension';
export default StyleSheet.create({
  heading: {
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
  accesGrid: {
    marginLeft: vw(10),
    fontSize: normalize(13),
    color: 'gray',
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
    marginTop: vh(30),
    marginLeft: vw(10),
  },
});
