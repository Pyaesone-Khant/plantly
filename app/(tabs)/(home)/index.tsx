import { PlantlyButton } from "@/components";
import { PlantCard } from "@/components/PlantCard";
import { usePlantsStore } from "@/stores/plantsStore";
import { theme } from "@/theme";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {

  const plants = usePlantsStore(state => state.plants);
  const router = useRouter();

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={plants}
      renderItem={({ item }) => (
        <PlantCard plant={item} />
      )}
      ListEmptyComponent={
        <View
          style={styles.noContentView}
        >
          <Text
            style={styles.text}
          >
            There's no plants for now!
          </Text>
          <PlantlyButton
            title="Add your first plant"
            onPress={() => {
              router.navigate("/new")
            }}
          />
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    padding: 12
  },
  text: {
    fontSize: 18,
    fontWeight: "semibold",
    textAlign: "center",
  },
  noContentView: {
    paddingVertical: 20,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  }
});
