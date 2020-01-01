import { Vector2, Vector3 } from 'types';
import * as v2 from './Vec2';
import * as v3 from './Vec3';

export class Vec2 {
  x: number;
  y: number;
  _vector: Vector2;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this._vector = { x, y };
  }

  get vector(){
    return this._vector
  }

  add = (w: Vector2) => v2.add(this._vector, w);

  length = () => v2.length(this._vector);

  sub = (w: Vector2) => v2.sub(this._vector, w);

  scale = (n: number) => v2.scale(this._vector, n);

  distance = (w: Vector2) => v2.distance(this._vector, w);

  dot = (w: Vector2) => v2.dot(this._vector, w);

  cross = (w: Vector2) => v2.cross(this._vector, w);

  normalize = () => v2.normalize(this._vector);
}

export class Vec3 {
  x: number;
  y: number;
  z: number;
  _vector: Vector3;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this._vector = { x, y, z };
  }

  get vector(){
    return this._vector
  }

  add = (w: Vector3) => v3.add(this._vector, w);

  length = () => v3.length(this._vector);

  sub = (w: Vector3) => v3.sub(this._vector, w);

  scale = (n: number) => v3.scale(this._vector, n);

  distance = (w: Vector3) => v3.distance(this._vector, w);

  dot = (w: Vector3) => v3.dot(this._vector, w);

  cross = (w: Vector3) => v3.cross(this._vector, w);

  normalize = () => v3.normalize(this._vector);
}
