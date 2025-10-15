import { Button } from "@/components/Button";
import {
  DEFAULT_ORIGIN,
  useMarkerDataProvider,
} from "@/providers/MarkerDataProvider";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export default function HomeScreen() {
  const router = useRouter();
  const { markersData, resetMarkers } = useMarkerDataProvider();

  const DisplayMarkers = React.useMemo(
    () =>
      markersData.map(({ latitude, longitude }, i) => (
        <Marker key={i} coordinate={{ latitude, longitude }}>
          <View
            style={{ height: 20, width: 20, backgroundColor: "#00f" }}
          ></View>
        </Marker>
      )),
    [markersData],
  );

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          ...DEFAULT_ORIGIN,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {DisplayMarkers}
      </MapView>

      <Button
        onPress={() => {
          router.push("/explore");
        }}
      >
        <Text>Go to Explore Page</Text>
      </Button>

      <Button onPress={resetMarkers}>
        <Text>Reset Markers</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
