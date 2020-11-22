export function productUrl(str) {
    return str.split(' ').map(el => el.toLowerCase()).join('-');
}