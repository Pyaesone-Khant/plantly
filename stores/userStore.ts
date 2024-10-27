import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserState = {
    hasFinishedOnboarding: boolean;
    toggleHasOnBoarded: () => void;
}

export const useUserStore = create(
    persist<UserState>((set) => ({
        hasFinishedOnboarding: false,
        toggleHasOnBoarded: () => {
            set((state) => {
                return {
                    ...state,
                    hasFinishedOnboarding: !state.hasFinishedOnboarding
                }
            })
        }
    }),
        {
            name: "plantly-user-store",
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
)