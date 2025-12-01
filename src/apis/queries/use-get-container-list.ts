import { useQuery } from '@tanstack/react-query';
import { caasQueryKeys } from '../constants/query-key';
import { HTTPMethod, request } from '../request';
import type { ContainerListResponse } from '../types/caas';
import { API_ENDPOINTS } from '../constants/api-endpoints';

export const getContainerList = () => {
  return request<ContainerListResponse>({
    method: HTTPMethod.GET,
    url: API_ENDPOINTS.CAAS.GET_CONTAINER_LIST,
  });
};

export const useContainerList = () => {
  return useQuery({
    queryKey: caasQueryKeys.container(),
    queryFn: () => getContainerList(),
    enabled: false,
  });
};
