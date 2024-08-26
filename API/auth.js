import Axios from "../../AxiosInstance";
import GetAuthToken from "../../Utils/AuthToken";

const RegisterAPI = async (data) => {
  let resolve = {
    data: null,
    error: null,
  };
  try {
    let res = await Axios({
      url: "/auth/register",
      method: "POST",
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

const LoginAPI = async ({ email, password }) => {
  let resolve = {
    data: null,
    error: null,
  };
  try {
    let res = await Axios({
      url: "/auth/login",
      method: "POST",
      data: {
        email: email,
        password: password,
      },
    });
    resolve.data = res.data;
  } catch (err) {
    if (err && err.response && err?.response?.data?.message) {
      resolve.error = err.response.data.message;
    } else {
      resolve.error = "SomthingWent wrong";
    }
  }
  return resolve;
};

const UpdateProfileAPI = async (data) => {
  console.log("this is the updated Data", data);
  let resolve = {
    data: null,
    error: null,
  };
  try {
    let res = await Axios({
      url: "/auth/update-profile",
      method: "PUT",
      headers: GetAuthToken(),
      data: data,
    });
    resolve.data = res.data;
  } catch (err) {
    if (err && err.response && err?.response?.data?.message) {
      resolve.error = err.response.data.message;
    } else {
      resolve.error = "SomthingWent wrong";
    }
  }
  return resolve;
};

export { RegisterAPI, LoginAPI, UpdateProfileAPI };
