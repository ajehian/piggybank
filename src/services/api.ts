import ky from 'ky'

const api = ky.create({
  headers: {
    Accept: 'application/json',
    ContentType: 'application/json',
  },
})
