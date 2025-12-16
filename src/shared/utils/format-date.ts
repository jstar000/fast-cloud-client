/**
 * ISO 8601 형식의 날짜 문자열을 "연/월/일 시:분" 형식으로 변환
 * @param isoString - ISO 8601 형식의 날짜 문자열 (ex: "2024-03-15T10:00:00Z")
 * @returns 포맷된 날짜 문자열 (ex: "2024/3/15 10:00")
 */
export const formatDateTime = (isoString: string): string => {
  if (!isoString) return '';

  const date = new Date(isoString);

  if (isNaN(date.getTime())) return '';

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${year}/${month}/${day} ${hours}:${minutes}`;
};

/**
 * ISO 8601 형식의 날짜 문자열을 "연.월.일" 형식으로 변환
 * @param isoString - ISO 8601 형식의 날짜 문자열 (ex: "2024-03-15T10:00:00Z")
 * @returns 포맷된 날짜 문자열 (ex: "2024.03.15")
 */
export const formatDate = (isoString: string): string => {
  if (!isoString) return '';

  const date = new Date(isoString);

  if (isNaN(date.getTime())) return '';

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}.${month}.${day}`;
};
