import { create } from "zustand";

type UserState = {
    hasFinishedOnboarding: boolean;
    toggleHasOnBoarded: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    hasFinishedOnboarding: false,
    toggleHasOnBoarded: () => {
        set((state) => {
            return {
                ...state,
                hasFinishedOnboarding: !state.hasFinishedOnboarding
            }
        })
    }
}))