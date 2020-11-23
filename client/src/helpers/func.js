export function productUrl(str) {
    return str.split(' ').map(el => el.toLowerCase()).join('-');
}

export function authHeader(token) {
    return {
        headers: {
            "Authorization": `Bearer ${token}`
          }
    }
}