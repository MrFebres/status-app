export const ASSETS_NAMES = [
  'accounts',
  'assets',
  'customers',
  'datapoints',
  'devices',
  'documents',
  'forms',
  'invites',
  'media',
  'messages',
  'namespaces',
  'orders',
  'patients',
  'relationships',
  'rules',
  'templates',
  'users',
  'workflows',
]

const BASE_URL = 'https://api.factoryfour.com/'
const BASE_END_POINT = '/health/status'

export const ENDPOINTS = ASSETS_NAMES.map(asset => `${BASE_URL}${asset}${BASE_END_POINT}`)

export const REFETCH_INTERVAL = 15 // Express in seconds.