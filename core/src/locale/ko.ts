import type { Localization } from './types'

const locale: Localization = {
  '*': {
    prefix: '매',
    suffix: '',
    text: '알 수 없음',
    '*': {
      value: { text: '{{value.text}}' },
      range: { text: '{{start.text}}-{{end.text}}' },
      everyX: { text: '{{every.value}}마다' },
    },
    month: {
      '*': { prefix: '에' },
      empty: { prefix: '의', text: '매월' },
      value: { text: '{{value.alt}}' },
      range: { text: '{{start.alt}}-{{end.alt}}' },
    },
    day: {
      '*': { prefix: '의' },
      empty: { prefix: '에', text: '매일' },
      everyX: { prefix: '', text: '{{every.value}}일마다' },
      noSpecific: { prefix: '에', text: '특정한 날 없음' },
    },
    dayOfWeek: {
      '*': { prefix: '의' },
      empty: { prefix: '에', text: '매주' },
      value: { text: '{{value.alt}}' },
      range: { text: '{{start.alt}}-{{end.alt}}' },
      noSpecific: { prefix: '과', text: '특정한 요일 없음' },
    },
    hour: {
      '*': { prefix: '의' },
      empty: { prefix: '에', text: '매시' },
      everyX: { prefix: '', text: '{{every.value}}시간마다' },
    },
    minute: {
      '*': { prefix: ':' },
      empty: { text: '매분' },
      everyX: { prefix: '', text: '{{every.value}}분마다' },
    },
    second: {
      '*': { prefix: ':' },
      empty: { text: '매초' },
      everyX: { prefix: '', text: '{{every.value}}초마다' },
    },
  },
  minute: { text: '분' },
  hour: { text: '시', minute: { '*': { prefix: '에', suffix: '분' }, empty: { text: '매' } } },
  day: { prefix: '매', text: '일' },
  week: { text: '주' },
  month: { prefix: '매', text: '월' },
  year: { prefix: '매', text: '년' },

  //quartz format
  'q-second': { text: '초' },
  'q-minute': { text: '분', second: { '*': { prefix: '와' } } },
  'q-hour': { text: '시', minute: { '*': { prefix: '와' } }, second: { '*': { prefix: '와' } } },
}

export default locale
