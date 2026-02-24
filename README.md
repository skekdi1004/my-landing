# W - 정바울 강사 프로필 홍보 사이트

정바울 강사의 전문성과 교육 실적을 소개하는 프로필 홍보 웹사이트입니다. Spline 3D 인터랙티브 배너를 활용한 모던한 디자인과 함께 문의, 리뷰, 레퍼런스 관리 기능을 제공합니다.

## 🎯 프로젝트 개요

**회사명**: W  
**강사**: 정바울  
**전문분야**: AI 전문가 (25년 경력)

## ✨ 주요 기능

### 완료된 기능

1. **🎨 인터랙티브 메인 배너**
   - Spline 3D 디자인을 활용한 역동적인 히어로 섹션
   - 강사 정보와 전문 분야 태그 표시
   - 반응형 디자인으로 모든 디바이스 지원

2. **👤 강사 프로필 섹션**
   - 강사 사진 및 기본 정보 (이메일, 전화, 주소)
   - 경력 사항: 국방부 육군 AI 및 데이터 분석 분야 (2000.10 - 2025.04)
   - 자격증: 통신 특급 감리원, 통신 특급 기술자, 네트워크 관리사, PC 정비사, 한자 2급, 행정사, 정보처리 기능사
   - 전문 분야 표시

3. **📚 교육 레퍼런스**
   - 진행한 교육 프로젝트 목록 표시
   - 기관명, 교육 기간, 교육 내용, 참여 인원 정보
   - 카테고리별 분류 (통신보안, 네트워크관리, PC정비)
   - 데이터베이스에서 실시간 로드

4. **⭐ 수강생 리뷰 시스템**
   - 기존 리뷰 목록 조회 및 표시
   - 평점 (1-5 별점) 시각화
   - 리뷰 작성 폼 (이름, 소속, 수강과정, 평점, 내용)
   - 실시간 리뷰 등록 및 데이터베이스 저장

5. **📧 문의 시스템**
   - 문의 폼 (이름, 이메일, 연락처, 제목, 내용)
   - 문의 내역 데이터베이스 저장
   - 상태 관리 (접수됨, 처리중, 완료)
   - Toast 알림으로 제출 결과 피드백

6. **📱 반응형 디자인**
   - 모바일, 태블릿, 데스크톱 완벽 지원
   - 햄버거 메뉴 네비게이션
   - 터치 친화적 UI/UX

## 🗂️ 데이터베이스 구조

### 1. inquiries (문의 테이블)
| 필드명 | 타입 | 설명 |
|--------|------|------|
| id | text | 고유 ID (자동생성) |
| name | text | 문의자 이름 |
| email | text | 문의자 이메일 |
| phone | text | 문의자 연락처 |
| subject | text | 문의 제목 |
| message | text | 문의 내용 |
| status | text | 처리 상태 (접수됨/처리중/완료) |
| created_at | datetime | 생성 일시 (자동) |
| updated_at | datetime | 수정 일시 (자동) |

### 2. reviews (리뷰 테이블)
| 필드명 | 타입 | 설명 |
|--------|------|------|
| id | text | 고유 ID (자동생성) |
| name | text | 작성자 이름 |
| company | text | 소속 회사/기관 |
| rating | number | 평점 (1-5) |
| content | text | 리뷰 내용 |
| course | text | 수강 과정 |
| created_at | datetime | 생성 일시 (자동) |
| updated_at | datetime | 수정 일시 (자동) |

### 3. references (레퍼런스 테이블)
| 필드명 | 타입 | 설명 |
|--------|------|------|
| id | text | 고유 ID (자동생성) |
| title | text | 레퍼런스 제목 |
| organization | text | 기관/회사명 |
| period | text | 교육 기간 |
| description | text | 교육 내용 설명 |
| participants | number | 교육 인원 |
| category | text | 교육 분야 |
| created_at | datetime | 생성 일시 (자동) |
| updated_at | datetime | 수정 일시 (자동) |

## 📂 프로젝트 구조

```
/
├── index.html          # 메인 HTML 페이지
├── css/
│   └── style.css       # 스타일시트
├── js/
│   └── main.js         # JavaScript 로직
└── README.md           # 프로젝트 문서
```

## 🔗 주요 기능 URI

### 페이지 섹션
- `/` - 메인 페이지
- `#home` - 히어로 섹션 (Spline 3D 배너)
- `#profile` - 강사 프로필
- `#references` - 교육 레퍼런스
- `#reviews` - 수강생 리뷰
- `#contact` - 문의하기

### API 엔드포인트 (RESTful Table API)

#### 레퍼런스
- `GET /tables/references?limit=100` - 레퍼런스 목록 조회
- `POST /tables/references` - 새 레퍼런스 추가
- `GET /tables/references/{id}` - 특정 레퍼런스 조회
- `PUT /tables/references/{id}` - 레퍼런스 수정
- `DELETE /tables/references/{id}` - 레퍼런스 삭제

#### 리뷰
- `GET /tables/reviews?limit=100&sort=-created_at` - 리뷰 목록 조회 (최신순)
- `POST /tables/reviews` - 새 리뷰 등록
- `GET /tables/reviews/{id}` - 특정 리뷰 조회
- `PUT /tables/reviews/{id}` - 리뷰 수정
- `DELETE /tables/reviews/{id}` - 리뷰 삭제

#### 문의
- `GET /tables/inquiries?limit=100` - 문의 목록 조회
- `POST /tables/inquiries` - 새 문의 등록
- `GET /tables/inquiries/{id}` - 특정 문의 조회
- `PATCH /tables/inquiries/{id}` - 문의 상태 업데이트
- `DELETE /tables/inquiries/{id}` - 문의 삭제

## 🎨 사용 기술

### Frontend
- **HTML5**: 시맨틱 마크업
- **CSS3**: 
  - 다크 테마 디자인 시스템
  - 글래스모피즘 효과 (Glassmorphism)
  - 그라데이션 배경 애니메이션
  - CSS Grid & Flexbox 레이아웃
  - CSS Variables로 테마 관리
  - 네온/발광 효과 (Glow Effects)
  - 커스텀 스크롤바 스타일링
  - 반응형 미디어 쿼리
- **JavaScript (ES6+)**:
  - Fetch API로 비동기 데이터 처리
  - DOM 조작 및 이벤트 처리
  - Form 유효성 검사
  - 인터랙티브 별점 시스템

### Design System
- **다크 테마**: 검은색 베이스 + 네온 그린/시안 액센트
- **컬러 팔레트**:
  - Primary: #00ff88 (네온 그린)
  - Secondary: #00d9ff (시안)
  - Accent: #ff0080 (마젠타)
- **효과**: 글로우, 백드롭 블러, 그라데이션 애니메이션

### External Resources
- **Spline Design**: 3D 인터랙티브 배너
- **Font Awesome 6.4.0**: 아이콘 라이브러리
- **Google Fonts**: Noto Sans KR (웹폰트)

### Database
- **RESTful Table API**: 서버리스 데이터 저장소

## 💾 초기 데이터

### 샘플 리뷰 (3건)
1. 삼성전자 - 김민수 (네트워크 보안 고급과정, 5점)
2. LG유플러스 - 이지훈 (통신 기초과정, 5점)
3. KT - 박정희 (PC 유지보수 과정, 4점)

### 샘플 레퍼런스 (3건)
1. 국방부 육군 - 통신보안 교육 (150명, 2020.03-2020.12)
2. 한국정보통신기술협회 - 네트워크 관리 실무과정 (80명, 2021.06-2021.09)
3. 중소기업진흥공단 - PC 정비 및 유지보수 (45명, 2022.01-2022.03)

## 🚀 향후 개발 계획

### Phase 2 - 추가 기능
- [ ] 관리자 대시보드 페이지
  - 문의 관리 (상태 변경, 답변 등록)
  - 리뷰 관리 (승인/거부 기능)
  - 레퍼런스 CRUD 기능
- [ ] 검색 및 필터 기능
  - 리뷰 평점별 필터
  - 레퍼런스 카테고리별 필터
  - 날짜 범위 검색
- [ ] 갤러리 섹션
  - 교육 현장 사진
  - 수료증 이미지
- [ ] 뉴스/블로그 섹션
  - 교육 관련 소식
  - 전문가 칼럼

### Phase 3 - 고급 기능
- [ ] 교육 일정 캘린더
- [ ] 온라인 상담 예약 시스템
- [ ] 교육 과정 상세 페이지
- [ ] PDF 다운로드 (프로필, 제안서)
- [ ] 다국어 지원 (영어)
- [ ] SEO 최적화

## 📱 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

## 📋 사용 방법

### 사용자 (수강생/문의자)
1. 웹사이트 접속
2. 네비게이션을 통해 원하는 섹션으로 이동
3. 프로필 및 레퍼런스 확인
4. 리뷰 작성 또는 문의 폼 제출

### 관리자 (추후 개발 예정)
- 관리자 페이지에서 문의 및 리뷰 관리
- 레퍼런스 추가/수정/삭제

## 🔒 보안 고려사항

- 클라이언트 사이드 입력 유효성 검사
- XSS 방지를 위한 HTML 이스케이프 처리
- CORS 정책 준수
- 민감한 정보 암호화 (추후 구현)

## 📞 연락처

**강사**: 정바울  
**이메일**: skekdi1004@naver.com  
**전화**: 010-7763-6878  
**위치**: 경기도 안양시

## 📄 라이센스

© 2026 W. All rights reserved.

---

**개발 완료일**: 2026-02-22  
**버전**: 2.0.0 (다크 테마 리디자인)  
**디자인**: DeFi/블록체인 스타일 다크 테마  
**상태**: 운영 준비 완료 ✅