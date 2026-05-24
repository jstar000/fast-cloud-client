# fast-cloud-client
졸업프로젝트 fast-cloud의 client 레포지토리입니다.

### fast-cloud는 입문자용 클라우드 서비스입니다.
본 프로젝트 **fast cloud**는 컴퓨터공학 전공생 및 비전공자가 클라우드 인프라를 학습하거나 소규모 프로젝트를 진행할 때 겪는 기술적 진입장벽을 해결하기 위해 기획되었습니다. AWS, GCP와 같은 기존 상용 클라우드는 기능이 강력하지만 복잡한 설정 과정(IAM, VPC 등)으로 인해, 개발자가 애플리케이션 로직 구현이라는 본질적인 목표보다 인프라 설정에 과도한 시간을 쏟게 만듭니다.

이에 본 팀은 오픈소스인 OpenStack과 Kubernetes를 기반으로 자체적인 IaaS(Infrastructure as a Service) 및 CaaS(Container as a Service) 환경을 구축하고, 이를 직관적인 웹 인터페이스로 추상화하여 제공하는 서비스를 개발하였습니다.

주요 기능으로는 사전 정의된 템플릿을 통한 간편한 가상머신(VM) 생성 및 관리 ▲컨테이너 이미지 기반의 애플리케이션 즉시 배포 및 URL 자동 할당 ▲대용량 데이터 저장을 위한 오브젝트 스토리지 버킷 관리가 있습니다.

이를 통해 사용자는 복잡한 네트워크 설정 없이 단 몇 번의 클릭만으로 개발 환경을 구축할 수 있으며, 인프라 설정 시간을 획기적으로 단축하여 프로젝트의 핵심 가치 창출에 집중할 수 있습니다. 본 프로젝트는 단순히 클라우드를 사용하는 것을 넘어, 클라우드 플랫폼의 내부 동작 원리를 깊이 있게 이해하고 구현했다는 점에서 기술적 의의가 있습니다.

### 핵심 시나리오
1. **IaaS (미니 PC 대여):** 사용자는 ‘미니 PC 대여’ 메뉴에서 사전 정의된 사양(CPU/RAM 등)을 선택하여 즉시 가상머신을 생성하고, SSH 접속 또는 웹 콘솔을 통해 서버를 제어합니다.
2. **CaaS (컨테이너 배포):** 사용자는 Docker Hub의 이미지 주소만 입력하여 애플리케이션을 배포하고, 자동으로 할당된 외부 접속 URL을 통해 서비스를 즉시 확인합니다.
3. **스토리지 관리:** 사용자는 프로젝트의 백업 데이터나 정적 파일을 저장하기 위해 버킷을 생성하고 파일을 업로드/다운로드합니다.

### Use-Case Diagram

<img width="1428" height="1236" alt="image" src="https://github.com/user-attachments/assets/a758d650-ddbe-42c7-ac7c-522fc0a51c9b" />

### 시스템 아키텍처 및 주요 모듈

<img width="1298" height="1754" alt="image" src="https://github.com/user-attachments/assets/545cc9ce-1aff-489c-bdcd-3f6f6bfb3636" />
<img width="1286" height="1154" alt="image" src="https://github.com/user-attachments/assets/2c94b280-db33-4ae7-b6bc-1a15396ca31d" />
<img width="1208" height="708" alt="image" src="https://github.com/user-attachments/assets/46840313-f4e7-4ddb-9cbe-cacdbc2f14ea" />
