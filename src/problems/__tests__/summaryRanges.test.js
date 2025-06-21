import { summaryRanges } from "../summaryRanges";

describe('summaryRanges', () => {
  it('handles example case with multiple ranges', () => {
    const input = [0, 1, 2, 4, 5, 7];
    const output = ["0->2", "4->5", "7"];
    expect(summaryRanges(input)).toEqual(output);
  });

  it('handles single element array', () => {
    const input = [3];
    const output = ["3"];
    expect(summaryRanges(input)).toEqual(output);
  });

  it('handles all individual elements', () => {
    const input = [1, 3, 5, 7];
    const output = ["1", "3", "5", "7"];
    expect(summaryRanges(input)).toEqual(output);
  });

  it('handles single full range', () => {
    const input = [10, 11, 12, 13, 14];
    const output = ["10->14"];
    expect(summaryRanges(input)).toEqual(output);
  });

  it('handles empty input', () => {
    expect(summaryRanges([])).toEqual([]);
  });

  it('handles negative numbers and mixed ranges', () => {
    const input = [-5, -4, -3, 0, 1, 3];
    const output = ["-5->-3", "0->1", "3"];
    expect(summaryRanges(input)).toEqual(output);
  });

  it('handles long list with alternating patterns', () => {
    const input = [0, 2, 3, 4, 6, 8, 9, 10, 11];
    const output = ["0", "2->4", "6", "8->11"];
    expect(summaryRanges(input)).toEqual(output);
  });
});
