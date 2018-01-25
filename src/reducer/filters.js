import {CHANGE_SELECTION, CHANGE_DATE_RANGE} from '../constants'

const dafaultFilters = {
    selected: [],
    dateRange: {
        from: null,
        to: null
    }
}

export default (filters = dafaultFilters, action) => {
    const {type, payload} = action

    switch (type) {
        case CHANGE_SELECTION:
            return {...filters, selected: payload.selected}
    
        case CHANGE_DATE_RANGE:
            return {...filters, dateRange: payload.dateRange}
    }
    return filters
}