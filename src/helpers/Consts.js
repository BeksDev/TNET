export const urls = {
    mans: "https://static.my.ge/myauto/js/mans.json",
    mans_models: "https://api2.myauto.ge/ka/getManModels",
    cats: "https://api2.myauto.ge/ka/cats/get",
    products: "https://api2.myauto.ge/ka/products"

}

export const cdn = (path, id, v) => {
    return `https://static.my.ge/myauto/photos/${path}/thumbs/${id}_${v}.jpg`
}