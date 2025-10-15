import { MarkerDataProvider } from "@/providers/MarkerDataProvider";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <MarkerDataProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              title: "Home",
            }}
          />
          <Stack.Screen
            name="explore"
            options={{
              title: "Explore",
            }}
          />
        </Stack>
        <StatusBar style="auto" />
      </MarkerDataProvider>
    </ThemeProvider>
  );
}
