// 인스턴스 생성 POST
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

// 인스턴스 조회 GET
export interface InstanceTemplate {
  name: string;
  desc: string;
}

export interface Instance {
  instanceId: string;
  instanceName: string;
  status: string;
  ipAddress: string;
  template: InstanceTemplate;
  createdAt: string;
}

export interface InstanceListResponse {
  status: string;
  data: Instance[];
}

// 버킷 생성 POST
export interface CreateBucketRequest {
  name: string;
}

export interface CreateBucketResponse {
  name: string;
  status: string;
  created_at: string;
}

// 버킷 조회 GET

export interface BucketObject {
  name: string;
  size: number;
  last_modified: string;
}

export interface BucketListResponse {
  bucket: string;
  objects: BucketObject[];
}
