import {COLOURS, FONT} from './Const';

export const fontBase = {
  fontFamily: FONT.family,
  fontWeight: FONT.weight,
  letterSpacing: FONT.spacing,
};

export const st = {
  page: {
    display: 'flex',
    height: '100%',
    width: '100%',
  },
  input: {
    ...fontBase,
    fontSize: FONT.size,
    height: 40,
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderRadius: 10,
    borderColor: COLOURS.MARKS,
    borderWidth: 1,
    width: '90%',
    marginTop: '10%',
    margin: 20,
    padding: 5,
    paddingHorizontal: 20,
  },
  strip: {
    height: 100,
    width: '100%',
  },
  todo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    margin: 4,
  },
  todoSection: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
  colorChange: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 2,
    marginLeft: 30,
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 3,
    shadowColor: 'black',
  },
  featureStrip: {
    display: 'flex',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 80,
  },
  stats: {
    ...fontBase,
    color: COLOURS.MARKS,
    fontSize: FONT.size - 1,
  },
};
