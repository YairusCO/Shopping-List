import httpStatus from 'http-status'
import { HTTP_METHODS } from './http-method.js'

const JSON_HEADER = {
  'Content-Type': 'application/json',
}

const isOkStatus = ({ status }) =>
  // Range of response OK
  status >= httpStatus.OK && status < httpStatus.MULTIPLE_CHOICES

const checkStatus = (res) => {
  if (!isOkStatus(res)) {
    throw res
  }
  return res
}

const tryConvertJsonResponse = (responseText) => {
  try {
    const obj = JSON.parse(responseText)
    return obj
  } catch (error) {
    error.responseText = responseText
    throw error
  }
}

const tryGetJsonResponse = async (response) => {
  const text = await response.text()
  const obj = tryConvertJsonResponse(text)
  return obj
}

export const get = async ({ url, headers }) => {
  const response = await fetch(url, {
    method: HTTP_METHODS.GET,
    headers: {
      ...JSON_HEADER,
      ...headers,
    },
  })

  checkStatus(response)
  const data = await tryGetJsonResponse(response)
  return data
}

export const post = async ({ url, body, headers }) => {
  const response = await fetch(url, {
    method: HTTP_METHODS.POST,
    headers: {
      ...JSON_HEADER,
      ...headers,
    },
    body: JSON.stringify(body),
    credentials: 'include',
  })
  const data = await tryGetJsonResponse(response)
  checkStatus(response)
  return data
}

export const put = async ({ url, body, headers }) => {
  const response = await fetch(url, {
    method: HTTP_METHODS.PUT,
    headers: {
      ...JSON_HEADER,
      ...headers,
    },
    body: JSON.stringify(body),
  })

  checkStatus(response)
  const data = await tryGetJsonResponse(response)
  return data
}

export const patch = async ({ url, body, headers }) => {
  const response = await fetch(url, {
    method: HTTP_METHODS.PATCH,
    headers: {
      ...JSON_HEADER,
      ...headers,
    },
    body: JSON.stringify(body),
  })

  checkStatus(response)
  const data = await tryGetJsonResponse(response)
  return data
}

export const deleteApi = async ({ url, body, headers }) => {
  const response = await fetch(url, {
    method: HTTP_METHODS.DELETE,
    headers: {
      ...JSON_HEADER,
      ...headers,
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  })

  checkStatus(response)
  const data = await tryGetJsonResponse(response)
  return data
}

export const http = {
  get,
  post,
  patch,
  put,
  deleteApi,
}
