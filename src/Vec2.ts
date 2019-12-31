import { Vector2 } from 'types';

export const Vec2 = (x: number, y: number): Vector2 => ({ x, y });

export const length = (v: Vector2): number => dot(v, v) ** 0.5;

export const add = (v: Vector2, w: Vector2): Vector2 =>
  Vec2(v.x + w.x, v.y + w.y);

export const sub = (v: Vector2, w: Vector2): Vector2 => add(v, scale(w, -1));

export const scale = (v: Vector2, n: number): Vector2 => Vec2(v.x * n, v.y * n);

export const distance = (v: Vector2, w: Vector2): number => length(sub(v, w));

export const dot = (v: Vector2, w: Vector2): number => v.x * w.x + v.y * w.y;

export const cross = (v: Vector2, w: Vector2): number => v.x * w.x + v.y * w.y;

// export const rotate = (v: Vector2, center: Vector2, distance: number) =>
//   add(
//     center,
//     Vec2(
//       cross(sub(v, center), Vec2(Math.sin(distance), Math.cos(distance))),
//       dot(sub(v, center), Vec2(Math.sin(distance), Math.cos(distance)))
//     )
//   ); // rotate(v, origin, theta_angle)

export const normalize = (v: Vector2) => scale(v, 1 / (length(v) || 1));

export default Vec2;
