// 컨테이너 생성
export interface CreateContainerRequest {
  clusterName: string;
  imageLink: string;
  externalPort: number;
  internalPort: number;
}

export interface Ports {
  external: number;
  internal: string;
}

export interface CreateContainerResponse {
  containerId: string;
  clusterName: string;
  imageLink: string;
  ports: Ports;
  requestTime: string;
  status: string;
}

// 컨테이너 조회
export interface Summary {
  totalContainers: number;
  runingContainers: number;
  clusterCount: number;
}

export interface Containers {
  containerId: string;
  clusterName: string;
  status: string;
  image: string;
  ports: Ports;
  createdAt: string;
}

export interface ContainerListResponse {
  summary: Summary;
  containers: Containers[];
}
