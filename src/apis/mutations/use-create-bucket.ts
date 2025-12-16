import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import { HTTPMethod, request } from '../request';
import type { CreateBucketRequest, CreateBucketResponse } from '../types/iaas';
import { iaasQueryKeys } from '../constants/query-key';

const postCreateBucket = ({ name }: CreateBucketRequest) => {
  return request<CreateBucketResponse>({
    method: HTTPMethod.POST,
    url: API_ENDPOINTS.IAAS.CREATE_BUCKET,
    body: { name },
  });
};

export const useCreateBucketMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postCreateBucket,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: iaasQueryKeys.bucket() });
    },
  });
};
