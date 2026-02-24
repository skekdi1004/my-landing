# W - 정바울 강사 프로필 사이트

## 🎯 프로젝트 소개
AI 전문 강사 정바울의 프로필 홍보 웹사이트입니다.

## 🚀 빠른 시작

### 1. 저장소 클론
```bash
git clone [YOUR-REPO-URL]
cd [YOUR-REPO-NAME]
```

### 2. 웹 서버 실행
간단한 HTTP 서버를 실행하세요:

**Python 3 사용:**
```bash
python -m http.server 8000
```

**Node.js 사용:**
```bash
npx http-server
```

### 3. 브라우저에서 열기
```
http://localhost:8000
```

## 📁 프로젝트 구조
```
/
├── index.html           # 메인 페이지
├── database.json        # 데이터베이스 백업 파일
├── css/
│   └── style.css        # 다크 테마 스타일
├── js/
│   ├── main.js          # 메인 JavaScript
│   └── init-data.js     # 데이터 초기화 스크립트
├── data/
│   └── samples.json     # 샘플 데이터
└── README.md
```

## 💾 데이터베이스 정보

### database.json 파일
이 파일에는 다음 데이터가 포함되어 있습니다:
- **리뷰 5건**: 삼성전자, LG유플러스, KT, 네이버, 카카오
- **레퍼런스 6건**: 국방부, 한국정보통신기술협회, 중소기업진흥공단, 삼성전자, 카카오, 네이버
- **문의**: 빈 배열 (사용자가 문의 시 추가됨)

### 데이터 자동 로드
사이트 첫 실행 시 `js/init-data.js`가 자동으로:
1. 데이터베이스가 비어있는지 확인
2. 비어있으면 `database.json`의 샘플 데이터 자동 추가
3. 페이지 새로고침

## 🎨 주요 기능

### ✅ 완성된 기능
1. **다크 테마 디자인**
   - DeFi/블록체인 스타일
   - 네온 그린/시안 색상
   - 글래스모피즘 효과
   - 그라데이션 애니메이션

2. **강사 프로필**
   - AI 전문 강사
   - 25년 경력
   - 자격증 7개:
     - 통신 특급 감리원
     - 통신 특급 기술자
     - 네트워크 관리사
     - PC 정비사
     - 한자 2급
     - 행정사
     - 정보처리 기능사

3. **인터랙티브 요소**
   - 3D Spline 배너
   - 별점 리뷰 시스템
   - 문의 폼
   - Toast 알림

4. **반응형 디자인**
   - 모바일, 태블릿, 데스크톱 최적화

## 🔧 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 다크 테마, 글래스모피즘, 그라데이션
- **JavaScript (ES6+)**: 비동기 처리, DOM 조작
- **Font Awesome 6.4.0**: 아이콘
- **Google Fonts**: Noto Sans KR
- **Spline Design**: 3D 인터랙티브 배너

## 📊 데이터베이스 스키마

### reviews (리뷰)
```json
{
  "name": "작성자 이름",
  "company": "소속 회사/기관",
  "course": "수강 과정",
  "rating": 5,
  "content": "리뷰 내용"
}
```

### references (레퍼런스)
```json
{
  "title": "레퍼런스 제목",
  "organization": "기관/회사명",
  "period": "교육 기간",
  "description": "교육 내용 설명",
  "participants": 150,
  "category": "교육 분야"
}
```

### inquiries (문의)
```json
{
  "name": "문의자 이름",
  "email": "이메일",
  "phone": "연락처",
  "subject": "문의 제목",
  "message": "문의 내용",
  "status": "접수됨"
}
```

## 🌐 배포

### GitHub Pages
1. GitHub 저장소 설정 → Pages
2. Source: `main` 브랜치 선택
3. 저장 후 배포 URL 확인

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
Drag & Drop으로 배포하거나:
```bash
npm i -g netlify-cli
netlify deploy
```

## 📞 연락처

**강사**: 정바울  
**이메일**: skekdi1004@naver.com  
**전화**: 010-7763-6878  
**위치**: 경기도 안양시

## 📄 라이센스
© 2026 W. All rights reserved.

## 📝 버전
- **Version**: 2.0.0
- **Last Updated**: 2026-02-24
- **Design**: DeFi/블록체인 스타일 다크 테마
