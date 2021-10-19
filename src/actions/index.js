export const onAdd = (value) => {
    return {
        type: "Add",
        payload: value
    }
}

export const onSubtract = (value) => {
    return {
        type: "Subtract",
        payload: value
    }
}