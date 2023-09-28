import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
    key: 'AIzaSyAL2T4yFIMmhktOJtCLsylRnzIEg_YYBKM',
    cx: '7302fcaa3d71d47f1'
}

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};
