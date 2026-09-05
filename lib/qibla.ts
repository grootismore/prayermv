const MECCA_LAT = 21.4225;
const MECCA_LONG = 39.8262;

function toRadians(deg: number): number {
  return (deg * Math.PI) / 180;
}

function toDegrees(rad: number): number {
  return (rad * 180) / Math.PI;
}

/**
 * Great-circle initial bearing from (lat, long) to the Kaaba, in degrees
 * clockwise from true north (0-360).
 */
export function getQiblaBearing(lat: number, long: number): number {
  const phi1 = toRadians(lat);
  const phi2 = toRadians(MECCA_LAT);
  const deltaLambda = toRadians(MECCA_LONG - long);

  const y = Math.sin(deltaLambda) * Math.cos(phi2);
  const x = Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(deltaLambda);
  const theta = Math.atan2(y, x);

  return (toDegrees(theta) + 360) % 360;
}
