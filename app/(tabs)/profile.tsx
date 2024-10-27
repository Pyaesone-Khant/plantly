import { PlantlyButton } from "@/components";
import { useUserStore } from "@/stores/userStore";
import { theme } from "@/theme";
import { StyleSheet, View } from "react-native";

export default function ProfileScreen() {

  const toggleHasOnBoarded = useUserStore(state => state.toggleHasOnBoarded)

  return (
    <View style={styles.container}>
      <PlantlyButton
        title="Go to Onboarding"
        onPress={toggleHasOnBoarded}
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
});
