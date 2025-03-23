import 'leaflet';

declare module 'leaflet' {
  function heatLayer(
    latlngs: LatLngExpression[],
    options?: {
      minOpacity?: number;
      maxZoom?: number;
      radius?: number;
      blur?: number;
      gradient?: { [key: number]: string };
    }
  ): Layer;

  interface HeatLayerOptions {
    minOpacity?: number;
    maxZoom?: number;
    radius?: number;
    blur?: number;
    gradient?: { [key: number]: string };
  }
}