import * as v2 from '../src/Vec2';

describe('2d Vectors', () => {
  it('Vector2', () => {
    expect(v2.Vec2(1, 1)).toEqual({ x: 1, y: 1 });
  });

  it('Add Vector2', () => {
    const a = v2.Vec2(1, 1);
    const b = v2.Vec2(1, 1);
    expect(v2.add(a, b)).toEqual({ x: 2, y: 2 });
  });

  it('Subtract Vector2', () => {
    const a = v2.Vec2(1, 1);
    const b = v2.Vec2(1, 1);
    expect(v2.sub(a, b)).toEqual({ x: 0, y: 0 });
  });

  it('Scale Vector2', () => {
    const a = v2.Vec2(1, 3);
    const n: number = -1;
    expect(v2.scale(a, n)).toEqual({ x: -1, y: -3 });
  });

  it('Distance between two Vector2', () => {
    const a = v2.Vec2(0, 0);
    const b = v2.Vec2(1, 0);
    expect(v2.distance(a, b)).toEqual(1);
  });

  it('Cross Product of Two Vector2', () => {
    const a = v2.Vec2(4, 5);
    const b = v2.Vec2(2, 1);
    const theta = 13;
    expect(v2.cross(a, b)).toEqual(theta);
  });

  it('Dot Product of Two Vector2', () => {
    const a = v2.Vec2(4, 8);
    const b = v2.Vec2(5, 2);
    const theta = 36;
    expect(v2.dot(a, b)).toEqual(theta);
  });

  it('Normalize Vector2', () => {
    const a = v2.Vec2(3, 4);
    const b = v2.Vec2(0.6000000000000001, 0.8);
    expect(v2.normalize(a)).toEqual(b);
  });
});
