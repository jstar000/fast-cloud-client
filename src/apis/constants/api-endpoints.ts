export const API_ENDPOINTS = {
  IAAS: {
    GET_BUCKET: 'iaas/bucket',
    CREATE_BUCKET: 'iaas/bucket',
    UPLOAD_BUCKET: 'iaas/bucket/upload',
    GET_INSTANCE: 'iaas/compute',
    CREATE_INSTANCE: 'iaas/compute',
  },
  CAAS: {
    GET_CONTAINER: 'caas/container',
    CREATE_CONTAINER: 'caas/container',
  },
  USER: {
    LOGIN: 'user/login',
    SIGNUP: 'user/signup',
    LOGOUT: 'user/logout',
    RESOURCES: 'user/resources',
  },
} as const;
