// ? CREATE 
export const createFunc = (obj) => {
    return { type: "CREATE", payload: obj }
}

// ? READ 
export const readFunc = (data) => {
    return { type: "READ", payload: data }
}

// ? UPDATE 
export const updateFunc = (obj) => {
    return { type: "UPDATE", payload: obj }
}

// ? Delete 
export const deleteFunc = (id) => {
    return { type: "DELETE", id: id }
}




// ? Error Appear
export const errorFunc = (error) => {
    return { type: "ERROR", error: error }
}





