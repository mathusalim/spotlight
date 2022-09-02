

const httpPost = async (url, data, params, headers) => {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-type': 'application/json',
            ...headers
        },
        body: JSON.stringify(data),
        ...params
    })
    return response.json();
}

const httpGet = async (url, params, headers) => {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'Content-type': 'application/json',
            ...headers
        },
        ...params
    })
    return response.json();
}

export { httpGet, httpPost }