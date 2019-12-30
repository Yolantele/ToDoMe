export const COLOURS = {
  MARKS: 'darkslategray',
  FONT: 'darkslategrey',
}
export const FONT = {
  size: 19,
  family: 'Avenir-light',
  color: COLOURS.FONT,
  weight: '400',
  spacing: 0.7,
}

export const FONT_BASE = {
  fontFamily: FONT.family,
  fontWeight: FONT.weight,
  letterSpacing: FONT.spacing,
}

export const TODO_COLOURS = {
  pink: {
    pink: true,
    main: '#ff78ae',
    strip: '#f56ea4',
    light: '#ff82b4',
  },
  green: {
    green: true,
    main: '#b2fc83',
    strip: '#99e36b',
    light: '#bcff91',
  },
  yellow: {
    yellow: true,
    main: '#fff385',
    strip: '#f2e77c',
    light: '#fff491',
  },
  blue: {
    blue: true,
    main: '#7ae9ff',
    strip: '#62d8f0',
    light: '#7ae9ff',
  },
}

export const ST = {
  page: {
    display: 'flex',
    height: '100%',
    width: '100%',
  },
  input: {
    ...FONT_BASE,
    fontSize: FONT.size,
    height: 40,
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    width: '90%',
    marginTop: '10%',
    margin: 20,
    padding: 5,
    paddingHorizontal: 20,
  },
}
