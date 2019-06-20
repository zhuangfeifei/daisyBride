import wepy from 'wepy'
import { createAction } from 'redux-actions'

export const asyncInc = createAction('asd', () => {
  return new Promise(resolve => {
    console.log('action')
    resolve('13')
  })
})