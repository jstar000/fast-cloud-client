import type {
  Bucket,
  BucketFileListResponse,
  BucketListResponse,
  CreateBucketResponse,
  UploadBucketFileResponse,
  UploadedFile,
} from '../types/iaas';

export const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true';

const delay = <T>(value: T, ms = 300): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

const mockBuckets: Bucket[] = [
  {
    bucket_id: '550e8400-e29b-41d4-a716-446655440000',
    name: 'my-bucket',
    status: 'PENDING',
    created_at: '2026-05-23T10:30:00Z',
  },
  {
    bucket_id: '661f9511-f30c-52e5-b827-557766551111',
    name: 'another-bucket',
    status: 'PENDING',
    created_at: '2026-05-23T11:00:00Z',
  },
  {
    bucket_id: '772a0622-041d-63f6-c938-668877662222',
    name: 'photos',
    status: 'PENDING',
    created_at: '2026-05-22T08:15:00Z',
  },
];

const mockBucketFiles: Record<string, BucketFileListResponse> = {
  'my-bucket': {
    bucket: 'my-bucket',
    objects: [
      {
        name: 'photo.jpg',
        size: 204800,
        last_modified: '2026-05-23T09:15:00Z',
      },
      {
        name: 'document.pdf',
        size: 51200,
        last_modified: '2026-05-22T14:00:00Z',
      },
      {
        name: 'docs/spec.pdf',
        size: 102400,
        last_modified: '2026-05-21T10:00:00Z',
      },
      {
        name: 'docs/readme.md',
        size: 2048,
        last_modified: '2026-05-20T18:00:00Z',
      },
      {
        name: 'images/cover.png',
        size: 512000,
        last_modified: '2026-05-19T12:00:00Z',
      },
      {
        name: 'images/thumbnail.jpg',
        size: 81920,
        last_modified: '2026-05-19T12:05:00Z',
      },
    ],
  },
  'another-bucket': {
    bucket: 'another-bucket',
    objects: [
      {
        name: 'backup.zip',
        size: 10485760,
        last_modified: '2026-05-22T15:00:00Z',
      },
      {
        name: 'logs/app.log',
        size: 4096,
        last_modified: '2026-05-22T15:05:00Z',
      },
    ],
  },
  photos: {
    bucket: 'photos',
    objects: [],
  },
};

export const getMockBucketList = (): Promise<BucketListResponse> =>
  delay([...mockBuckets]);

export const getMockBucketFileList = (
  bucketName: string
): Promise<BucketFileListResponse> => {
  const data = mockBucketFiles[bucketName] ?? {
    bucket: bucketName,
    objects: [],
  };
  return delay({
    bucket: data.bucket,
    objects: [...data.objects],
  });
};

export const uploadMockBucketFiles = (
  bucket: string,
  files: File[]
): Promise<UploadBucketFileResponse> => {
  const nowIso = new Date().toISOString();
  const uploaded: UploadedFile[] = files.map((file) => ({
    name: file.name,
    bytes: file.size,
    content_type: file.type || 'application/octet-stream',
    etag: `mock-etag-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
    last_modified: nowIso,
  }));

  if (!mockBucketFiles[bucket]) {
    mockBucketFiles[bucket] = { bucket, objects: [] };
  }
  mockBucketFiles[bucket].objects.push(
    ...files.map((file) => ({
      name: file.name,
      size: file.size,
      last_modified: nowIso,
    }))
  );

  return delay({
    bucket,
    uploadCount: files.length,
    files: uploaded,
  });
};

export const createMockBucket = (
  name: string
): Promise<CreateBucketResponse> => {
  const createdAt = new Date().toISOString();
  const newBucket: Bucket = {
    bucket_id:
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : `mock-${Date.now()}`,
    name,
    status: 'PENDING',
    created_at: createdAt,
  };
  mockBuckets.unshift(newBucket);
  mockBucketFiles[name] = { bucket: name, objects: [] };
  return delay({
    name,
    status: 'PENDING',
    created_at: createdAt,
  });
};
