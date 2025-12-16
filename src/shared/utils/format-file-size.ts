/**
 * 바이트 단위의 파일 크기를 읽기 쉬운 형식으로 변환
 * @param bytes 바이트 단위의 파일 크기
 * @returns 포맷된 문자열 (예: "1.5GB", "256MB")
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0B';

  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  const size = bytes / Math.pow(k, i);
  const formatted = size % 1 === 0 ? size.toString() : size.toFixed(1);

  return `${formatted}${units[i]}`;
};
