import {OrderedMap, Map} from 'immutable'

export function arrToMap(arr) {
    return arr.reduce((acc, item) => {
            acc[item.id] = item
            return acc
    }, {})
}

export function mapToArr(obj) {
    const arr = [];
    for (let key in obj) {
        arr.push(obj[key])
    }
    return arr
}