import { Vec2, Vec3 } from '../src';

describe('Vector Class', () => {
  it('Vector Class', () => {
    expect(new Vec2(1, 1).vector).toEqual({ x: 1, y: 1 });
  });

  it('Add Vector Class', () => {
    const a = new Vec2(1, 1);
    const b = new Vec2(1, 1);
    expect(a.add(b)).toEqual({ x: 2, y: 2 });
  });

  it('Subtract Vector Class', () => {
    const a = new Vec2(1, 1);
    const b = new Vec2(1, 1);
    expect(a.sub(b)).toEqual({ x: 0, y: 0 });
  });

  it('Scale Vector Class', () => {
    const a = new Vec2(1, 3);
    const n: number = -1;
    expect(a.scale(n)).toEqual({ x: -1, y: -3 });
  });

  it('Distance between two Vector Class', () => {
    const a = new Vec2(0, 0);
    const b = new Vec2(1, 0);
    expect(a.distance(b)).toEqual(1);
  });

  it('Cross Product of Two Vector Class', () => {
    const a = new Vec2(4, 5);
    const b = new Vec2(2, 1);
    const theta = 13;
    expect(a.cross(b)).toEqual(theta);
  });

  it('Dot Product of Two Vector Class', () => {
    const a = new Vec2(4, 8);
    const b = new Vec2(5, 2);
    const theta = 36;
    expect(a.dot(b)).toEqual(theta);
  });

  it('Normalize Vector Class', () => {
    const a = new Vec2(3, 4);
    const b = new Vec2(0.6000000000000001, 0.8);
    expect(a.normalize()).toEqual(b.vector);
  });

  it('Vector2 Length (Magnitude) Class', () => {
    const a = new Vec2(3, 4);
    const length = 5;
    expect(a.length()).toEqual(length);
  });
});

describe('Vector3 Class', () => {
  it('Vector3 Class', () => {
    expect(new Vec3(1, 1, 1).vector).toEqual({ x: 1, y: 1, z: 1 });
  });

  it('Add Vector3 Class', () => {
    const a = new Vec3(1, 1, 1);
    const b = new Vec3(1, 1, 1);
    expect(a.add(b)).toEqual({ x: 2, y: 2, z: 2 });
  });

  it('Subtract Vector3 Class', () => {
    const a = new Vec3(1, 1, 1);
    const b = new Vec3(1, 1, 1);
    expect(a.sub(b)).toEqual({ x: 0, y: 0, z: 0 });
  });

  it('Scale Vector3 Class', () => {
    const a = new Vec3(1, 3, 4);
    const n: number = -1;
    expect(a.scale(n)).toEqual({ x: -1, y: -3, z: -4 });
  });

  it('Distance between two Vector3 Class', () => {
    const a = new Vec3(0, 0, 0);
    const b = new Vec3(1, 0, 0);
    expect(a.distance(b)).toEqual(1);
  });

  it('Cross Product of Two Vector3 Class', () => {
    const a = new Vec3(0, 1, 0);
    const b = new Vec3(1, 0, 0);
    const c = new Vec3(0, 0, -1);
    expect(a.cross(b)).toEqual(c.vector);
  });

  it('Dot Product of Two Vector3 Class', () => {
    const a = new Vec3(9, 2, 7);
    const b = new Vec3(4, 8, 10);
    const theta = 122;
    expect(a.dot(b)).toEqual(theta);
  });

  it('Normalize Vector3 Class', () => {
    const a = new Vec3(3, 4, 5);
    const b = new Vec3(
      0.4242640687119285,
      0.565685424949238,
      0.7071067811865475
    );
    expect(a.normalize()).toEqual(b.vector);
  });

  it('Vector3 Length (Magnitude) Class', () => {
    const a = new Vec3(3, 4, 5);
    const length = 7.0710678118654755;
    expect(a.length()).toEqual(length);
  });
});
