import { Vector3 } from 'types';

export const Vec3 = (x: number, y: number, z: number = 0): Vector3 => ({
  x,
  y,
  z,
});

export const length = (v: Vector3): number => dot(v, v) ** 0.5;

export const add = (v: Vector3, w: Vector3): Vector3 =>
  Vec3(v.x + w.x, v.y + w.y, v.z + w.z);

export const sub = (v: Vector3, w: Vector3): Vector3 => add(v, scale(w, -1));

export const scale = (v: Vector3, n: number): Vector3 =>
  Vec3(v.x * n, v.y * n, v.z * n);

export const distance = (v: Vector3, w: Vector3): number => length(sub(v, w));

export const dot = (v: Vector3, w: Vector3): number =>
  v.x * w.x + v.y * w.y + v.z * w.z;

export const cross = (v: Vector3, w: Vector3): Vector3 =>
  Vec3(v.y * w.z - v.z * w.y, v.z * w.x - v.x * w.z, v.x * w.y - v.y * w.x);

// export const rotate = (v: Vector3, center: Vector3, distance: number) =>
//   add(
//     center,
//     Vec2(
//       cross(sub(v, center), Vec2(Math.sin(distance), Math.cos(distance))),
//       dot(sub(v, center), Vec2(Math.sin(distance), Math.cos(distance)))
//     )
//   ); // rotate(v, origin, theta_angle)

export const normalize = (v: Vector3) => scale(v, 1 / (length(v) || 1));

export default Vec3;
