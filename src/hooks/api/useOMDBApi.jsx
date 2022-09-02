import { httpGet, httpPost } from '../../Services/api.service'

const useOMDBApi = () => {
  const key = 'fb298175'

  const get = (url, data) => {
    return httpGet(
      `${url}?${objectToQueryParams({ ...data, apiKey: key })}`,
      null,
      null,
    )
  }

  return { get }
}

export { useOMDBApi }

const objectToQueryParams = (obj) => {
  const params = new URLSearchParams()

  for (const field in obj) {
    const fieldValue = obj[field]

    if (fieldValue == null) continue

    if (Array.isArray(fieldValue)) {
      for (let index = 0, paramIndex = 0; index < fieldValue.length; index++) {
        const elemValue = fieldValue[index]

        if (elemValue == null) continue

        if (typeof elemValue === 'object') {
          for (const prop in elemValue) {
            const propValue = resolveParamValue(elemValue[prop])

            params.append(`${field}[${paramIndex}].${prop}`, propValue)
          }
        } else {
          params.append(`${field}[${paramIndex}]`, fieldValue[index])
        }

        paramIndex++
      }
    } else if (typeof fieldValue === 'object') {
      for (const prop in fieldValue) {
        const propValue = resolveParamValue(fieldValue[prop])

        params.append(`${field}.${prop}`, propValue)
      }
    } else {
      params.append(field, obj[field])
    }
  }

  return params.toString()
}
