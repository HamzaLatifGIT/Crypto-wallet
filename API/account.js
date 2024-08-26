import Axios from "../../AxiosInstance";
import GetAuthToken from "../../Utils/AuthToken";

const CreateProfile = async (data) => {
    let resolve = {
        data: null,
        error: null,
    };
    try {
        let res = await Axios({
            url: "/account",
            method: "POST",
            headers: GetAuthToken(),
            data: data,
        });
        resolve.data = res.data;
    } catch (err) {
        if (err && err.response && err?.response?.data?.message) {
            resolve.error = err.response.data.message;
        } else {
            resolve.error = "Somthing Went Wrong";
        }
    }
    return resolve;
};

const GetAllProfiles = async () => {
    let resolve = {
        data: null,
        error: null,
    };
    try {
        let res = await Axios({
            url: "/account",
            method: "GET",
            headers: GetAuthToken(),
        });
        resolve.data = res.data;
    } catch (err) {
        if (err && err.response && err?.response?.data?.message) {
            resolve.error = err.response.data.message;
        } else {
            resolve.error = "Somthing Went Wrong";
        }
    }
    return resolve;
};


export { CreateProfile, GetAllProfiles };
