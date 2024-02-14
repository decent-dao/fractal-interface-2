import { defer } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'

function Component () {
  return <Dashboard />
}

export function dashboardLoader () {
  const p = new Promise((resolve, reject) => {
    return setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('foobar')
      } else {
        reject(new Error('it just happens sometimes'))
      }
    }, 2000)
  })

  return defer({ message: p })
}

export default Component
