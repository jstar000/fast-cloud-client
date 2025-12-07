import { useMutation } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import { HTTPMethod, request } from '../request';
import type {
  CreateContainerResponse,
  CreateContainerRequest,
} from '../types/caas';

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
  return useMutation({
    mutationFn: postCreateContainer,
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
