import { useMutation } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import { HTTPMethod, request } from '../request';
import type {
  CreateInstanceResponse,
  CreateInstanceRequest,
} from '../types/iaas';

const postCreateInstance = ({
  instanceName,
  templateId,
}: CreateInstanceRequest) => {
  return request<CreateInstanceResponse>({
    method: HTTPMethod.POST,
    url: API_ENDPOINTS.IAAS.CREATE_INSTANCE,
    body: {
      instanceName,
      templateId,
    },
  });
};

export const useCreateInstanceMutation = () => {
  return useMutation({
    mutationFn: postCreateInstance,
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
