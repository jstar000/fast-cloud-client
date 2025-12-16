import { useSuspenseQuery } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import { HTTPMethod, request } from '../request';
import type { BucketListResponse } from '../types/iaas';
import { iaasQueryKeys } from '../constants/query-key';

export const getBucketList = () => {
  return request<BucketListResponse>({
    method: HTTPMethod.GET,
    url: API_ENDPOINTS.IAAS.GET_BUCKET_LIST,
  });
};

export const useBucketList = () => {
  return useSuspenseQuery({
    queryKey: iaasQueryKeys.bucket(),
    queryFn: () => getBucketList(),
  });
};
