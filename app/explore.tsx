import { Button } from "@/components/Button";
import { useMarkerDataProvider } from "@/providers/MarkerDataProvider";
import { Text, View } from "react-native";

export default function TabTwoScreen() {
  const { deleteHalfMarkers } = useMarkerDataProvider();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={deleteHalfMarkers}>
        <Text>Delete Half Markers</Text>
      </Button>
    </View>
  );
}
