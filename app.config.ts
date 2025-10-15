import { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    plugins: [
      ...(config.plugins ?? []),
      [
        "react-native-maps",
        {
          iosGoogleMapsApiKey: process.env.GOOGLE_API_KEY,
          androidGoogleMapsApiKey: process.env.GOOGLE_API_KEY,
        },
      ],
    ],
    slug: "my-app",
    name: "My App",
  };
};
