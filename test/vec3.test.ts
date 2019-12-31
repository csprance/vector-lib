import v from '../src';

describe('3d Vectors', () => {
  it('Vector3', () => {
    expect(v.Vec3(1, 1, 1)).toEqual({ x: 1, y: 1, z: 1 });
  });

  it('Add Vector3', () => {
    const a = v.Vec3(1, 1, 1);
    const b = v.Vec3(1, 1, 1);
    expect(v.add(a, b)).toEqual({ x: 2, y: 2, z: 2 });
  });

  it('Subtract Vector3', () => {
    const a = v.Vec3(1, 1, 1);
    const b = v.Vec3(1, 1, 1);
    expect(v.sub(a, b)).toEqual({ x: 0, y: 0, z: 0 });
  });

  it('Scale Vector3', () => {
    const a = v.Vec3(1, 3, 1);
    const n: number = -1;
    expect(v.scale(a, n)).toEqual({ x: -1, y: -3, z: -1 });
  });

  it('Distance between two Vector3', () => {
    const a = v.Vec3(0, 0, 0);
    const b = v.Vec3(1, 0, 0);
    expect(v.distance(a, b)).toEqual(1);
  });

  it('Cross Product of Two Vector3', () => {
    const a = v.Vec3(0, 1, 0);
    const b = v.Vec3(1, 0, 0);
    const c = v.Vec3(0, 0, -1);
    expect(v.cross(a, b)).toEqual(c);
  });

  it('Dot Product of Two Vector3', () => {
    const a = v.Vec3(9, 2, 7);
    const b = v.Vec3(4, 8, 10);
    const theta = 122;
    expect(v.dot(a, b)).toEqual(theta);
  });

  it('Normalize Vector3', () => {
    const a = v.Vec3(3, 4, 5);
    const b = v.Vec3(
      0.4242640687119285,
      0.565685424949238,
      0.7071067811865475
    );
    expect(v.normalize(a)).toEqual(b);
  });
});
