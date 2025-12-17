import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import { HTTPMethod, request } from '../request';
import type {
  CreateContainerResponse,
  CreateContainerRequest,
} from '../types/caas';
import { caasQueryKeys } from '../constants/query-key';

const postCreateContainer = ({
  clusterName,
  imageLink,
  externalPort,
  internalPort,
}: CreateContainerRequest) => {
  return request<CreateContainerResponse>({
    method: HTTPMethod.POST,
    url: API_ENDPOINTS.CAAS.CREATE_CONTAINER,
    body: {
      clusterName: clusterName,
      imageLink: imageLink,
      externalPort: externalPort,
      internalPort: internalPort,
    },
  });
};

export const useCreateContainerMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postCreateContainer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: caasQueryKeys.container() });
    },
  });
};
