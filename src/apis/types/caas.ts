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
