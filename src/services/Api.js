import { urls } from '../helpers'

const get = async (url, params) => {

    const response = await fetch(url + '?' + new URLSearchParams(params));

    const result = response.json();

    if (response.ok && result.statusCode == 1) {
        console.log(result);
    }

    return result;
}

export const getMans = (params) => get(urls.mans, params);
export const getMansModels = (params) => get(urls.mans_models, params);
export const getProducts = (params) => get(urls.products, params);
