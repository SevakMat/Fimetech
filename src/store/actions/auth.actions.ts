import { AuthTypes, iSetLoadingAction } from "../types/auth";

export const setLoading = (loading: boolean): iSetLoadingAction => ({
    type: AuthTypes.SET_LOADING,
    loading
})
