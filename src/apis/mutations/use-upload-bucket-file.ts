import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import { HTTPMethod, request } from '../request';
import type { UploadBucketFileResponse } from '../types/iaas';
import { iaasQueryKeys } from '../constants/query-key';
import { USE_MOCK, uploadMockBucketFiles } from '../mocks/iaas-bucket';

interface UploadBucketFileArgs {
  bucket: string;
  files: File[];
}

const postUploadBucketFile = ({ bucket, files }: UploadBucketFileArgs) => {
  if (USE_MOCK) return uploadMockBucketFiles(bucket, files);

  const formData = new FormData();
  formData.append('bucket', bucket);
  files.forEach((file) => formData.append('files', file));

  return request<UploadBucketFileResponse>({
    method: HTTPMethod.POST,
    url: API_ENDPOINTS.IAAS.UPLOAD_BUCKET,
    body: formData,
  });
};

export const useUploadBucketFileMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postUploadBucketFile,
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: iaasQueryKeys.bucketFiles(variables.bucket),
      });
    },
  });
};
