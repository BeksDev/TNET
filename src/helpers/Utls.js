export const man_search = (keyword, array) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i].man_id == keyword) {
            return array[i];
        }
    }
}

export const man_model_search = (keyword, array) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i].model_id == keyword) {
            return array[i];
        }
    }
}


export const day_different = (day, params) => {
    const startDate = day;
    const diffInMs = new Date() - new Date(startDate)
    let diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
    params = 0;

    if(diffInDays === 0){
        diffInDays = Math.round(diffInMs / (1000 * 60 * 60 ))
        params = 1;
    }
    return(diffInDays);
}