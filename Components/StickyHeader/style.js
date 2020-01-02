import { COLOURS, FONT, FONT_BASE } from '../../Style'

export const ST = {
  dark: {
    height: 100,
    width: '100%',
  },
  colorChange: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 2,
    marginLeft: 30,
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowColor: 'black',
    elevation: 1,
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
    ...FONT_BASE,
    color: COLOURS.MARKS,
    fontSize: FONT.size - 1,
  },
}
