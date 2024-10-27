import { PlantlyButton } from "@/components";
import { useUserStore } from "@/stores/userStore";
import { theme } from "@/theme";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function OnboardingScreen() {

  const router = useRouter();

  const toggleHasOnBoarded = useUserStore(state => state.toggleHasOnBoarded)

  const handlePress = () => {
    toggleHasOnBoarded();
    router.replace("/")
  }

  return (
    <View style={styles.container}>
      <PlantlyButton
        title="Let Me In"
        onPress={handlePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});