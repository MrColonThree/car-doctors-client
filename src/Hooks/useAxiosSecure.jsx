import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import Swal from "sweetalert2";
import { useNavigation } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://car-doctor-server-ashy-sigma.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigation();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error! interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          logOut()
            .then(() => {
              Swal.fire("Oops!", "User logged out", "error");
              navigate("/");
            })
            .catch((error) => console.log(error));
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
