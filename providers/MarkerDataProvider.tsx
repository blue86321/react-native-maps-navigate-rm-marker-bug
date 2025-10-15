import React, { createContext, useContext } from "react";
import { LatLng } from "react-native-maps";

export const DEFAULT_ORIGIN: LatLng = {
  latitude: 37.78825,
  longitude: -122.4324,
};

// Generate random markers around the default origin
const DEFAULT_MARKERS = Array.from({ length: 10 }).map((_, i) => {
  const latitude = DEFAULT_ORIGIN.latitude + (Math.random() - 0.5) * 0.03;
  const longitude = DEFAULT_ORIGIN.longitude + (Math.random() - 0.5) * 0.03;
  return { latitude, longitude } satisfies LatLng;
});

export type MarkerDataProviderContextType = {
  markersData: LatLng[];
  readonly deleteHalfMarkers: () => void;
  readonly resetMarkers: () => void;
};

export const MarkerDataProviderContext =
  createContext<MarkerDataProviderContextType | null>(null);

export const useMarkerDataProvider = () => {
  const context = useContext(MarkerDataProviderContext);
  if (!context) {
    throw new Error(
      "useMarkerDataProvider must be used within a MarkerDataProvider",
    );
  }
  return context;
};

export const MarkerDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [markersData, setMarkersData] =
    React.useState<LatLng[]>(DEFAULT_MARKERS);

  const deleteHalfMarkers = () => {
    setMarkersData((prevMarkers) => prevMarkers.filter((_, i) => i % 2 === 0));
  };

  const resetMarkers = () => {
    setMarkersData(DEFAULT_MARKERS);
  };

  return (
    <MarkerDataProviderContext.Provider
      value={{ markersData, deleteHalfMarkers, resetMarkers }}
    >
      {children}
    </MarkerDataProviderContext.Provider>
  );
};
