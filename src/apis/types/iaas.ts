// 버킷 생성 POST
export interface CreateBucketRequest {
  name: string;
}

export interface CreateBUcketResponse {
  name: string;
  status: string;
  created_at: string;
}
