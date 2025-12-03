// 버킷 생성 POST
export interface CreateInstanceRequest {
  instanceName: string;
  templateId: number;
}

export interface CreateInstanceResponse {
  instanceId: string;
  instanceName: string;
  openstackUuid: string;
  status: string;
  createdAt: string;
}
