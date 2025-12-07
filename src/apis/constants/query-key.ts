export const iaasQueryKeys = {
  all: () => ['iaas'],
  bucket: () => [...iaasQueryKeys.all(), 'bucket'],
  instance: () => [...iaasQueryKeys.all(), 'instance'],
  instanceDetail: (instanceId: string) => [
    ...iaasQueryKeys.instance(),
    instanceId,
  ],
};

export const caasQueryKeys = {
  all: () => ['caas'],
  container: () => [...caasQueryKeys.all(), 'container'],
  containerDetail: (containerId: string) => [
    ...caasQueryKeys.container(),
    containerId,
  ],
};

export const userQueryKeys = {
  all: () => ['user'],
  resources: () => [...userQueryKeys.all(), 'resources'],
};
