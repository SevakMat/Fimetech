import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";
import { AppDispatch } from "..";
import {
  loginRequest,
  logOutRequest,
  SendAddressesRequest,
  SignUpRequest,
} from "../../services/auth.service";
import { Address, LoginData, SignInData } from "../../services/types";
import {
  loginRequestSuccess,
  logOutRequestSuccess,
  setLoading,
} from "../actions/auth.actions";

export const loginEffect = (
  loginData: LoginData,
  navigate: NavigateFunction
): any => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingEffect(true));
      // Get user
      const result = await loginRequest(loginData);
      const {
        data: { accessToken, refreshToken, user },
      } = result;
      await localStorage.setItem("accessToken", accessToken);
      await localStorage.setItem("refreshToken", refreshToken);
      dispatch(loginRequestSuccess(user));

      toast.success("Successfully logged in");
      navigate("/dashboard");

      dispatch(setLoadingEffect(false));
    } catch (error: any) {
      dispatch(setLoadingEffect(false));
      toast.error("Logined faild");
    } finally {
      dispatch(setLoadingEffect(false));
    }
  };
};
export const setLoadingEffect = (loading: boolean): any => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(loading));
  };
};

export const logOutEffect = (navigate: NavigateFunction): any => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingEffect(true));
      // Get user
     await logOutRequest();

      await localStorage.clear();

      dispatch(logOutRequestSuccess());

      toast.success("Successfully logout");
      navigate("/login");
      dispatch(setLoadingEffect(false));
    } catch (error: any) {
      dispatch(setLoadingEffect(false));
      toast.error("Logaut faild");
    } finally {
      dispatch(setLoadingEffect(false));
    }
  };
};
export const signUpEffect = (signInData: SignInData,navigate:NavigateFunction): any => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingEffect(true));
      // Get user
      await SignUpRequest(signInData);
      
      toast.success("Successfully sign Up");
      navigate('/login');

      dispatch(setLoadingEffect(false));
    } catch (error: any) {
      dispatch(setLoadingEffect(false));
      toast.error("Logined faild");
    } finally {
      dispatch(setLoadingEffect(false));
    }
  };
};

export const sendAddressesEffect = (AddressesList: Address[],navigate:NavigateFunction): any => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingEffect(true));
      // Get user
      await SendAddressesRequest(AddressesList);
      toast.success("Successfully sended addresses");
    } catch (error: any) {
      toast.error("sended addresses faild");
    } finally {
      console.log("pahhho");
      
    }
  };
};
