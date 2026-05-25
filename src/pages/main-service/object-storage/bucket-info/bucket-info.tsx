import React, { Suspense, useRef, useState } from 'react';
import * as styles from './bucket-info.css';
import { Folder_Default, Chevron_Down_Default } from '@/assets/svg';
import { useBucketList } from '@/apis/queries/use-get-bucket-list';
import { useBucketFileList } from '@/apis/queries/use-get-bucket-file-list';
import { useCreateBucketMutation } from '@/apis/mutations/use-create-bucket';
import { useUploadBucketFileMutation } from '@/apis/mutations/use-upload-bucket-file';
import { Loading } from '@/shared/components/loading/Loading';
import { Button } from '@/shared/components/button/Button';
import { BUTTON_VARIANTS } from '@/shared/constants/button';
import { formatFileSize } from '@/shared/utils/format-file-size';
import { formatDate, formatDateTime } from '@/shared/utils/format-date';
import type { Bucket } from '@/apis/types/iaas';

interface CreateBucketModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (_name: string) => void;
}

const CreateBucketModal = ({
  isOpen,
  onClose,
  onSubmit,
}: CreateBucketModalProps) => {
  const [bucketName, setBucketName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (bucketName.trim()) {
      onSubmit(bucketName.trim());
      setBucketName('');
      onClose();
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>새 버킷/폴더 생성</h2>
        <input
          type="text"
          className={styles.modalInput}
          placeholder="버킷 이름을 입력하세요."
          value={bucketName}
          onChange={(e) => setBucketName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <div className={styles.modalButtons}>
          <button className={styles.modalButtonCancel} onClick={onClose}>
            취소
          </button>
          <button className={styles.modalButtonSubmit} onClick={handleSubmit}>
            생성
          </button>
        </div>
      </div>
    </div>
  );
};

// 파일 확장자로 타입 추출
const getFileType = (fileName: string): string => {
  const ext = fileName.split('.').pop()?.toLowerCase();
  if (!ext) return 'unknown';

  const typeMap: Record<string, string> = {
    pdf: 'application/pdf',
    pptx: 'application/pptx',
    docx: 'application/docx',
    xlsx: 'application/xlsx',
    zip: 'application/zip',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mp3',
  };

  return typeMap[ext] || `application/${ext}`;
};

// 파일 이름에서 폴더 경로와 파일명 분리
const parseFileName = (fullPath: string) => {
  const parts = fullPath.split('/');
  const fileName = parts.pop() || '';
  const folderPath = parts.join('/');
  return { folderPath, fileName };
};

interface BucketSidebarProps {
  buckets: Bucket[];
  selectedBucketName: string | null;
  onSelectBucket: (_name: string) => void;
  onOpenCreate: () => void;
}

const BucketSidebar = ({
  buckets,
  selectedBucketName,
  onSelectBucket,
  onOpenCreate,
}: BucketSidebarProps) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <Button variant={BUTTON_VARIANTS.NAV_SIGNUP} onClick={onOpenCreate}>
          + 버킷 생성
        </Button>
        {/* <button className={styles.createButtonSecondary}>
          <Folder_Default />
          폴더 생성
        </button> */}
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>버킷 목록</h3>
        <div className={styles.folderList}>
          {buckets.length === 0 ? (
            <div className={styles.bucketCard}>
              <span className={styles.bucketInfoValue}>
                아직 생성된 버킷이 없습니다.
              </span>
            </div>
          ) : (
            buckets.map((bucket) => {
              const isSelected = selectedBucketName === bucket.name;
              return (
                <div
                  key={bucket.bucket_id}
                  className={
                    isSelected ? styles.bucketCardSelected : styles.bucketCard
                  }
                  onClick={() => onSelectBucket(bucket.name)}
                >
                  <div className={styles.bucketHeader}>
                    <div className={styles.bucketName}>
                      <Folder_Default />
                      {bucket.name}
                      {isSelected && <Chevron_Down_Default />}
                    </div>
                  </div>
                  <span className={styles.fileCount}>{bucket.status}</span>
                  <div className={styles.bucketInfo}>
                    <div className={styles.bucketInfoRow}>
                      <span className={styles.bucketInfoLabel}>생성일</span>
                      <span className={styles.bucketInfoValue}>
                        {formatDate(bucket.created_at)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

interface FileUploaderProps {
  bucketName: string;
}

const FileUploader = ({ bucketName }: FileUploaderProps) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutate: uploadFiles, isPending } = useUploadBucketFileMutation();

  const addFiles = (incoming: FileList | File[]) => {
    const list = Array.from(incoming);
    if (list.length === 0) return;
    setSelectedFiles((prev) => [...prev, ...list]);
  };

  const handleDropzoneClick = () => {
    inputRef.current?.click();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) addFiles(e.target.files);
    e.target.value = '';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files) addFiles(e.dataTransfer.files);
  };

  const handleRemove = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    if (selectedFiles.length === 0 || isPending) return;
    uploadFiles(
      { bucket: bucketName, files: selectedFiles },
      {
        onSuccess: () => setSelectedFiles([]),
      }
    );
  };

  return (
    <div className={styles.uploaderSection}>
      <input
        ref={inputRef}
        type="file"
        multiple
        hidden
        onChange={handleInputChange}
      />
      <div
        className={
          isDragOver ? styles.uploaderDropzoneActive : styles.uploaderDropzone
        }
        onClick={handleDropzoneClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Folder_Default />
        <span>파일을 끌어다 놓거나 클릭해 선택하세요</span>
        <span className={styles.uploaderHint}>
          여러 파일을 한 번에 올릴 수 있어요
        </span>
      </div>

      {selectedFiles.length > 0 && (
        <>
          <div className={styles.uploaderFileList}>
            {selectedFiles.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className={styles.uploaderFileRow}
              >
                <div className={styles.uploaderFileMeta}>
                  <span className={styles.uploaderFileName}>{file.name}</span>
                  <span className={styles.uploaderFileSize}>
                    {formatFileSize(file.size)}
                  </span>
                </div>
                <button
                  type="button"
                  className={styles.uploaderRemoveButton}
                  onClick={() => handleRemove(index)}
                  disabled={isPending}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          <div className={styles.uploaderActions}>
            <button
              type="button"
              className={styles.uploaderUploadButton}
              onClick={handleUpload}
              disabled={isPending}
            >
              {isPending
                ? '업로드 중...'
                : `파일 업로드하기 (${selectedFiles.length}개)`}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

interface BucketMainProps {
  bucketName: string;
}

const BucketMain = ({ bucketName }: BucketMainProps) => {
  const { data } = useBucketFileList(bucketName);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const objects = data.objects;

  // 폴더 목록 추출 (이름에 '/'가 포함된 파일만, 첫 번째 경로 세그먼트 기준)
  const folders = [
    ...new Set(
      objects
        .filter((obj) => obj.name.includes('/'))
        .map((obj) => obj.name.split('/')[0])
    ),
  ];

  // 선택된 폴더 또는 검색어로 필터링된 파일 목록
  const filteredObjects = objects.filter((obj) => {
    const matchesFolder = selectedFolder
      ? obj.name.startsWith(`${selectedFolder}/`)
      : true;
    const matchesSearch = searchQuery
      ? obj.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesFolder && matchesSearch;
  });

  return (
    <div className={styles.mainContent}>
      <div className={styles.uploadLocation}>
        <h3 className={styles.uploadLocationTitle}>업로드 위치</h3>
        <div className={styles.uploadLocationPath}>
          <Folder_Default />
          {selectedFolder ? `${bucketName} / ${selectedFolder}` : bucketName}
        </div>
      </div>

      {folders.length > 0 && (
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>폴더 목록</h3>
          <div className={styles.folderList}>
            {folders.map((folder) => (
              <div
                key={folder}
                className={
                  selectedFolder === folder
                    ? styles.folderItemSelected
                    : styles.folderItem
                }
                onClick={() =>
                  setSelectedFolder(selectedFolder === folder ? null : folder)
                }
              >
                <Folder_Default />
                <span
                  className={
                    selectedFolder === folder
                      ? styles.folderNameSelected
                      : styles.folderName
                  }
                >
                  {folder}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={styles.fileSection}>
        <div className={styles.fileSectionHeader}>
          <h3 className={styles.fileSectionTitle}>파일 목록</h3>
          <span className={styles.fileCountBadge}>
            ({filteredObjects.length})
          </span>
        </div>

        <FileUploader bucketName={bucketName} />

        <div className={styles.searchContainer}>
          <span className={styles.searchIcon}>Q</span>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="파일 검색"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className={styles.fileTable}>
          <div className={styles.tableHeader}>
            <span className={styles.tableHeaderCell}>이름</span>
            <span className={styles.tableHeaderCell}>크기</span>
            <span className={styles.tableHeaderCell}>수정일</span>
            <span className={styles.tableHeaderCell}>타입</span>
          </div>
          <div className={styles.tableBody}>
            {filteredObjects.map((obj) => {
              const { folderPath, fileName } = parseFileName(obj.name);
              return (
                <div key={obj.name} className={styles.tableRow}>
                  <span className={styles.tableCell}>
                    <span className={styles.fileName}>
                      {folderPath && (
                        <span className={styles.folderPath}>{folderPath}/</span>
                      )}
                      <span className={styles.fileNameText}>{fileName}</span>
                    </span>
                  </span>
                  <span className={styles.tableCell}>
                    {formatFileSize(obj.size)}
                  </span>
                  <span className={styles.tableCell}>
                    {formatDateTime(obj.last_modified)}
                  </span>
                  <span className={styles.tableCell}>
                    {getFileType(fileName)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const BucketContent = () => {
  const { data: buckets } = useBucketList();
  const { mutate: createBucket } = useCreateBucketMutation();
  const [selectedBucketName, setSelectedBucketName] = useState<string | null>(
    buckets[0]?.name ?? null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateBucket = (name: string) => {
    createBucket({ name });
  };

  return (
    <>
      <div className={styles.pageContainer}>
        <BucketSidebar
          buckets={buckets}
          selectedBucketName={selectedBucketName}
          onSelectBucket={setSelectedBucketName}
          onOpenCreate={() => setIsModalOpen(true)}
        />

        {selectedBucketName ? (
          <Suspense fallback={<Loading />}>
            <BucketMain bucketName={selectedBucketName} />
          </Suspense>
        ) : (
          <div className={styles.mainContent}>
            <div className={styles.uploadLocation}>
              <h3 className={styles.uploadLocationTitle}>
                버킷을 선택하거나 생성해 주세요.
              </h3>
            </div>
          </div>
        )}
      </div>

      <CreateBucketModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateBucket}
      />
    </>
  );
};

const BucketInfo = () => {
  return (
    <div className={styles.container}>
      <header className={styles.title}>
        <h1 className={styles.mainTitle}>Object Storage</h1>
        <h2 className={styles.subtitle}>
          버킷과 파일을 관리하고 데이터를 안전하게 저장할 수 있어요.
        </h2>
      </header>

      <Suspense fallback={<Loading />}>
        <BucketContent />
      </Suspense>
    </div>
  );
};

export default BucketInfo;
