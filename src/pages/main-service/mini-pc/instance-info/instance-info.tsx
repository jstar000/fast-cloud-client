import { Divider_Vertical } from '@/assets/svg';
import * as styles from './instance-info.css';
import CardSquare from '@/shared/components/card/card-square/card-square';
import { useInstanceList } from '@/apis/queries/use-get-instance-list';
import { Suspense } from 'react';
import { Loading } from '@/shared/components/loading/Loading';

const InstanceContent = () => {
  const { data } = useInstanceList();

  const instances = data.data; // 인스턴스 배열
  const totalInstances = instances.length;
  const runningInstances = instances.filter(
    (instance) => instance.status.toUpperCase() === 'ACTIVE'
  ).length;

  return (
    <>
      <div className={styles.instanceInfo}>
        <p className={styles.detailBox}>
          <span className={styles.detailBoxText}>총 인스턴스</span>
          <span className={styles.detailBoxNum}>{totalInstances}</span>
        </p>
        <div className={styles.divider}>
          <Divider_Vertical />
        </div>
        <p className={styles.detailBox}>
          <span className={styles.detailBoxText}>실행 중인 인스턴스</span>
          <span className={styles.detailBoxNum}>{runningInstances}</span>
        </p>
      </div>

      <div className={styles.cardGrid}>
        {instances.map((instance) => (
          <CardSquare
            key={instance.instanceId}
            instanceId={instance.instanceId}
            instanceName={instance.instanceName}
            status={instance.status}
            templateName={instance.template.name}
            templateDesc={instance.template.desc}
            ipAddress={instance.ipAddress}
            createdAt={instance.createdAt}
          />
        ))}
      </div>
    </>
  );
};

const InstanceInfo = () => {
  return (
    <div className={styles.container}>
      <header className={styles.title}>
        <h1 className={styles.mainTitle}>Instance Dashboard</h1>
        <h2 className={styles.subtitle}>
          생성된 인스턴스들의 상태를 확인하고 관리할 수 있어요.
        </h2>
      </header>

      <Suspense fallback={<Loading />}>
        <InstanceContent />
      </Suspense>
    </div>
  );
};

export default InstanceInfo;
