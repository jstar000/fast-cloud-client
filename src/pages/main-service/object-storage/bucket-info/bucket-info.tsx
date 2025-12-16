import React, { Suspense, useState } from 'react';
import * as styles from './bucket-info.css';
import { Folder_Default, Chevron_Down_Default } from '@/assets/svg';
import { useBucketList } from '@/apis/queries/use-get-bucket-list';
import { useCreateBucketMutation } from '@/apis/mutations/use-create-bucket';
import { Loading } from '@/shared/components/loading/Loading';
import { Button } from '@/shared/components/button/Button';
import { BUTTON_VARIANTS } from '@/shared/constants/button';
import { formatFileSize } from '@/shared/utils/format-file-size';
import { formatDate, formatDateTime } from '@/shared/utils/format-date';

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

const BucketContent = () => {
  const { data } = useBucketList();
  const { mutate: createBucket } = useCreateBucketMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const bucketName = data.bucket;
  const objects = data.objects;

  // 폴더 목록 추출 (첫 번째 경로 세그먼트 기준)
  const folders = [...new Set(objects.map((obj) => obj.name.split('/')[0]))];

  // 총 파일 크기 계산
  const totalSize = objects.reduce((acc, obj) => acc + obj.size, 0);

  // 가장 최근 수정일
  const latestModified =
    objects.length > 0
      ? new Date(
          Math.max(
            ...objects.map((obj) => new Date(obj.last_modified).getTime())
          )
        )
      : null;

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

  const handleCreateBucket = (name: string) => {
    createBucket({ name });
  };

  // 파일 이름에서 폴더 경로와 파일명 분리
  const parseFileName = (fullPath: string) => {
    const parts = fullPath.split('/');
    const fileName = parts.pop() || '';
    const folderPath = parts.join('/');
    return { folderPath, fileName };
  };

  return (
    <>
      <div className={styles.pageContainer}>
        {/* 왼쪽 사이드바 */}
        <div className={styles.sidebar}>
          <div className={styles.header}>
            <Button
              variant={BUTTON_VARIANTS.NAV_SIGNUP}
              onClick={() => setIsModalOpen(true)}
            >
              + 버킷 생성
            </Button>
            <button className={styles.createButtonSecondary}>
              <Folder_Default />
              폴더 생성
            </button>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>현재 버킷</h3>
            <div className={styles.bucketCard}>
              <div className={styles.bucketHeader}>
                <div className={styles.bucketName}>
                  <Folder_Default />
                  {bucketName}
                  <Chevron_Down_Default />
                </div>
              </div>
              <span className={styles.fileCount}>{objects.length}개 파일</span>
              <div className={styles.bucketInfo}>
                <div className={styles.bucketInfoRow}>
                  <span className={styles.bucketInfoLabel}>크기</span>
                  <span className={styles.bucketInfoValue}>
                    {formatFileSize(totalSize)}
                  </span>
                </div>
                <div className={styles.bucketInfoRow}>
                  <span className={styles.bucketInfoLabel}>생성일</span>
                  <span className={styles.bucketInfoValue}>
                    {latestModified
                      ? formatDate(latestModified.toISOString())
                      : '-'}
                  </span>
                </div>
              </div>
            </div>
          </div>

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
        </div>

        {/* 오른쪽 메인 콘텐츠 */}
        <div className={styles.mainContent}>
          <div className={styles.uploadLocation}>
            <h3 className={styles.uploadLocationTitle}>업로드 위치</h3>
            <div className={styles.uploadLocationPath}>
              <Folder_Default />
              {selectedFolder || bucketName}
            </div>
          </div>

          <div className={styles.fileSection}>
            <div className={styles.fileSectionHeader}>
              <h3 className={styles.fileSectionTitle}>파일 목록</h3>
              <span className={styles.fileCountBadge}>
                ({filteredObjects.length})
              </span>
            </div>

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
                            <span className={styles.folderPath}>
                              {folderPath}/
                            </span>
                          )}
                          <span className={styles.fileNameText}>
                            {fileName}
                          </span>
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
