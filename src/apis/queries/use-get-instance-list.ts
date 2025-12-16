import { useSuspenseQuery } from '@tanstack/react-query';
import { iaasQueryKeys } from '../constants/query-key';
import { HTTPMethod, request } from '../request';
import type { InstanceListResponse } from '../types/iaas';
import { API_ENDPOINTS } from '../constants/api-endpoints';

export const getInstanceList = () => {
  return request<InstanceListResponse>({
    method: HTTPMethod.GET,
    url: API_ENDPOINTS.IAAS.GET_INSTANCE_LIST,
  });
};

export const useInstanceList = () => {
  return useSuspenseQuery({
    queryKey: iaasQueryKeys.instance(),
    queryFn: () => getInstanceList(),
  });
};
