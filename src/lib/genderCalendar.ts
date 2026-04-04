/**
 * Chinese Gender Calendar (中国性别日历)
 * Rows: Mother's Lunar Age at conception (18–45)
 * Columns: Conception month (January=0 … December=11)
 * 'B' = Boy (男), 'G' = Girl (女)
 *
 * Data sourced from the traditional Qing Dynasty gender calendar chart.
 */

export type Gender = 'boy' | 'girl';

// Index: [lunarAge - 18][month - 1]  (lunarAge 18..45, month 1..12)
const CALENDAR: string[][] = [
  // Age 18
  ['G','B','G','B','B','B','B','B','B','B','B','B'],
  // Age 19
  ['G','G','B','G','B','B','B','B','B','B','B','B'],
  // Age 20
  ['G','G','G','G','G','G','B','G','B','G','B','B'],
  // Age 21
  ['B','G','B','G','G','G','G','G','G','G','G','B'],
  // Age 22
  ['G','B','G','G','B','G','G','G','B','B','B','G'],
  // Age 23
  ['G','G','B','B','B','G','G','G','G','B','G','G'],
  // Age 24
  ['G','G','B','B','B','G','G','G','G','B','G','G'],
  // Age 25
  ['B','G','G','B','B','G','B','G','G','G','B','B'],
  // Age 26
  ['B','G','G','G','B','G','B','G','G','G','B','B'],
  // Age 27
  ['G','G','B','G','G','B','B','G','G','B','B','B'],
  // Age 28
  ['B','G','G','G','B','G','B','G','G','G','B','B'],
  // Age 29
  ['G','B','G','G','B','G','G','G','B','B','B','G'],
  // Age 30
  ['B','B','G','G','B','G','B','B','G','G','B','G'],
  // Age 31
  ['B','G','G','B','G','G','B','G','G','B','G','B'],
  // Age 32
  ['G','G','B','G','G','G','B','G','B','G','B','B'],
  // Age 33
  ['G','B','B','B','G','G','B','G','B','B','B','G'],
  // Age 34
  ['B','B','B','B','G','B','B','B','B','G','B','B'],
  // Age 35
  ['B','G','B','G','G','B','G','G','G','G','G','B'],
  // Age 36
  ['B','B','B','G','B','B','G','B','B','B','B','B'],
  // Age 37
  ['B','B','B','G','B','B','G','B','B','B','B','B'],
  // Age 38
  ['B','B','B','B','B','B','B','B','B','B','B','B'],
  // Age 39
  ['G','G','G','G','G','G','G','G','G','G','G','G'],
  // Age 40
  ['B','B','B','B','B','B','B','B','B','B','B','B'],
  // Age 41
  ['G','G','G','G','G','G','G','G','G','G','G','G'],
  // Age 42
  ['B','B','B','B','B','B','B','B','B','B','B','B'],
  // Age 43
  ['G','G','G','G','G','G','G','G','G','G','G','G'],
  // Age 44
  ['B','B','B','B','B','B','B','B','B','B','B','B'],
  // Age 45
  ['G','G','G','G','G','G','G','G','G','G','G','G'],
];

export const MIN_LUNAR_AGE = 18;
export const MAX_LUNAR_AGE = 45;
export const MONTHS = 12;

/**
 * Predict gender based on mother's lunar age and conception month.
 * @param lunarAge  Mother's lunar age at time of conception (18–45)
 * @param month     Conception month 1-indexed (1=January … 12=December)
 * @returns 'boy' | 'girl'
 */
export function predictGender(lunarAge: number, month: number): Gender {
  if (lunarAge < MIN_LUNAR_AGE || lunarAge > MAX_LUNAR_AGE) {
    throw new RangeError(`Lunar age must be between ${MIN_LUNAR_AGE} and ${MAX_LUNAR_AGE}`);
  }
  if (month < 1 || month > 12) {
    throw new RangeError('Month must be between 1 and 12');
  }
  const row = lunarAge - MIN_LUNAR_AGE;
  const col = month - 1;
  return CALENDAR[row][col] === 'B' ? 'boy' : 'girl';
}

/**
 * Get the entire calendar table for display.
 * Returns a 2D array where result[ageIndex][monthIndex] is 'boy' | 'girl',
 * ageIndex 0 = age 18, monthIndex 0 = January.
 */
export function getFullCalendar(): Gender[][] {
  return CALENDAR.map((row) =>
    row.map((cell) => (cell === 'B' ? 'boy' : 'girl'))
  );
}

/**
 * Estimate Chinese lunar age from Gregorian birth year and conception year.
 * Chinese lunar age = (conception year – birth year) + 1
 */
export function estimateLunarAge(birthYear: number, conceptionYear: number): number {
  return conceptionYear - birthYear + 1;
}
