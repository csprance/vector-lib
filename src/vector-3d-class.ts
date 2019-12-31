import { Vector3 } from 'types';

export default class Vec3 {
  x: number;
  y: number;
  z: number;

  constructor({ x, y, z }: { x: number; y: number; z: number }) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  add = (w: Vector3) => V(this.x + w.x, this.y + w.y, this.z + w.z);
  length = () => this.dot(this) ** 0.5;
  sub = (w: Vector3) =>this +  this.scale(w, -1);
  scale = (n: number) => V(this.x * n, this.y * n, this.z * n);
  distance = (w: Vector3) => length(sub(this, w));
  dot = (w: Vector3) => this.x * w.x + this.y * w.y;
  cross = (w: Vector3) => this.x * w.y - this.y * w.x;
}
