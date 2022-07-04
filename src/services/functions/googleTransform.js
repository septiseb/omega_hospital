

export const transformArray = (array) => {
    var keys = array.shift();
    var objects = array.map(function (values) {
        return keys.reduce(function (o, k, i) {
            o[k] = values[i];
            return o;
        }, {});
    });
    return objects
}


export const transformFilter = (data, filters) => {
    const objFilter = filters.map((filter) => {

        const uniqueFilter = [...new Set(data.map(d => d[filter]))]

        return {
            id: filter.toLowerCase().split(" ").join("-"), name: filter, options: uniqueFilter.map(d => ({ value: d.toLowerCase().split(" ").join("-"), label: d, checked: false })
            )
        }
    })

    return objFilter
}
