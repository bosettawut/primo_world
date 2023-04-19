const { merge } = require('./merge_sort');
import {describe, expect, test} from '@jest/globals';


describe('merge', () => {
  it('two sorted arrays', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const expected = [1, 2, 3, 4, 5, 6];

    expect(merge(collection1, collection2)).toEqual(expected);
  });

  it('different lengths', () => {
    const collection1 = [1, 2, 5];
    const collection2 = [3, 4];
    const expected = [1, 2, 3, 4, 5];

    expect(merge(collection1, collection2)).toEqual(expected);
  });

  it('duplicate values', () => {
    const collection1 = [1, 2, 3];
    const collection2 = [2, 3, 4];
    const expected = [1, 2, 2, 3, 3, 4];

    expect(merge(collection1, collection2)).toEqual(expected);
  });

  it('empty arrays', () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const expected: number[] = [];
  
    expect(merge(collection1, collection2)).toEqual(expected);
  });
  
  
  
  
  
  
});
