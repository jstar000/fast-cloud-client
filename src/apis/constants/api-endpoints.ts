export const API_ENDPOINTS = {
  IAAS: {
    GET_BUCKET_LIST: 'iaas/bucket?bucket=test', // 파라미터 고정(임시)
    CREATE_BUCKET: 'iaas/bucket',
    UPLOAD_BUCKET: 'iaas/bucket/upload',
    GET_INSTANCE_LIST: 'iaas/compute',
    CREATE_INSTANCE: 'iaas/compute',
  },
  CAAS: {
    GET_CONTAINER_LIST: 'caas/container',
    CREATE_CONTAINER: 'caas/container',
  },
  USER: {
    LOGIN: 'user/login',
    SIGNUP: 'user/signup',
    LOGOUT: 'user/logout',
    RESOURCES: 'user/resources',
  },
} as const;
