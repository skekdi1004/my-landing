/**
 * 데이터베이스 초기화 스크립트
 * W - 정바울 강사 프로필 사이트
 * 
 * 이 스크립트는 샘플 데이터를 데이터베이스에 자동으로 입력합니다.
 */

// 샘플 리뷰 데이터
const sampleReviews = [
    {
        name: "김민수",
        company: "삼성전자",
        course: "네트워크 보안 고급과정",
        rating: 5,
        content: "통신 분야의 깊이 있는 전문성과 실무 경험을 바탕으로 한 강의가 인상적이었습니다. 특히 네트워크 보안에 대한 설명이 매우 유익했습니다."
    },
    {
        name: "이지훈",
        company: "LG유플러스",
        course: "통신 기초과정",
        rating: 5,
        content: "25년간의 군 통신 경력을 바탕으로 한 실질적인 사례 위주의 교육이 인상 깊었습니다."
    },
    {
        name: "박정희",
        company: "KT",
        course: "PC 유지보수 과정",
        rating: 4,
        content: "실무에 바로 적용할 수 있는 실용적인 내용으로 구성되어 있어 매우 만족스러웠습니다."
    },
    {
        name: "최수진",
        company: "네이버",
        course: "AI 머신러닝 기초",
        rating: 5,
        content: "AI와 머신러닝의 기초부터 실무 적용까지 체계적으로 배울 수 있었습니다. 강사님의 열정이 느껴지는 강의였습니다."
    },
    {
        name: "정민호",
        company: "카카오",
        course: "딥러닝 실전 과정",
        rating: 5,
        content: "이론과 실습의 균형이 완벽했습니다. 특히 실제 프로젝트 사례를 통한 학습이 매우 유익했습니다."
    }
];

// 샘플 레퍼런스 데이터
const sampleReferences = [
    {
        title: "국방부 통신보안 교육",
        organization: "국방부 육군",
        period: "2020.03 - 2020.12",
        description: "군 통신체계 보안 강화 교육 진행. 암호화 통신 및 보안 프로토콜 교육",
        participants: 150,
        category: "통신보안"
    },
    {
        title: "네트워크 관리 실무과정",
        organization: "한국정보통신기술협회",
        period: "2021.06 - 2021.09",
        description: "기업 네트워크 관리자 대상 실무 교육. 라우팅, 스위칭, 방화벽 설정 등",
        participants: 80,
        category: "네트워크관리"
    },
    {
        title: "PC 정비 및 유지보수",
        organization: "중소기업진흥공단",
        period: "2022.01 - 2022.03",
        description: "중소기업 직원 대상 PC 하드웨어 및 소프트웨어 유지보수 교육",
        participants: 45,
        category: "PC정비"
    },
    {
        title: "AI 기초 교육 프로그램",
        organization: "삼성전자",
        period: "2023.05 - 2023.08",
        description: "임직원 대상 AI 기초 이론 및 활용 교육. Python 기반 머신러닝 실습 포함",
        participants: 120,
        category: "AI교육"
    },
    {
        title: "데이터 사이언스 실무 워크샵",
        organization: "카카오",
        period: "2024.02 - 2024.05",
        description: "데이터 분석가 및 개발자 대상 실무 중심 데이터 사이언스 교육. 실제 비즈니스 케이스 기반 프로젝트 수행",
        participants: 60,
        category: "데이터분석"
    },
    {
        title: "딥러닝 고급 과정",
        organization: "네이버",
        period: "2024.09 - 2024.12",
        description: "AI 엔지니어 대상 고급 딥러닝 기법 교육. CNN, RNN, Transformer 모델 실습",
        participants: 35,
        category: "딥러닝"
    }
];

// 데이터 초기화 함수
async function initializeData() {
    console.log('🚀 데이터베이스 초기화 시작...');
    
    let successCount = 0;
    let errorCount = 0;
    
    // 리뷰 데이터 추가
    console.log('\n📝 리뷰 데이터 추가 중...');
    for (const review of sampleReviews) {
        try {
            const response = await fetch('tables/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(review)
            });
            
            if (response.ok) {
                successCount++;
                console.log(`✅ 리뷰 추가 성공: ${review.name} (${review.company})`);
            } else {
                errorCount++;
                console.error(`❌ 리뷰 추가 실패: ${review.name}`);
            }
        } catch (error) {
            errorCount++;
            console.error(`❌ 리뷰 추가 오류: ${review.name}`, error);
        }
        
        // API 요청 간격 (너무 빠르면 제한될 수 있음)
        await sleep(200);
    }
    
    // 레퍼런스 데이터 추가
    console.log('\n📚 레퍼런스 데이터 추가 중...');
    for (const reference of sampleReferences) {
        try {
            const response = await fetch('tables/references', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reference)
            });
            
            if (response.ok) {
                successCount++;
                console.log(`✅ 레퍼런스 추가 성공: ${reference.title}`);
            } else {
                errorCount++;
                console.error(`❌ 레퍼런스 추가 실패: ${reference.title}`);
            }
        } catch (error) {
            errorCount++;
            console.error(`❌ 레퍼런스 추가 오류: ${reference.title}`, error);
        }
        
        await sleep(200);
    }
    
    // 결과 출력
    console.log('\n' + '='.repeat(50));
    console.log('✨ 데이터베이스 초기화 완료!');
    console.log(`📊 성공: ${successCount}건 | ❌ 실패: ${errorCount}건`);
    console.log('='.repeat(50) + '\n');
    
    return {
        success: successCount,
        error: errorCount,
        total: successCount + errorCount
    };
}

// Sleep 함수 (API 요청 간격 조절용)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 데이터 확인 함수
async function checkData() {
    console.log('🔍 현재 데이터 확인 중...\n');
    
    try {
        // 리뷰 데이터 확인
        const reviewsResponse = await fetch('tables/reviews?limit=100');
        const reviewsData = await reviewsResponse.json();
        console.log(`📝 리뷰: ${reviewsData.total}건`);
        
        // 레퍼런스 데이터 확인
        const referencesResponse = await fetch('tables/references?limit=100');
        const referencesData = await referencesResponse.json();
        console.log(`📚 레퍼런스: ${referencesData.total}건`);
        
        // 문의 데이터 확인
        const inquiriesResponse = await fetch('tables/inquiries?limit=100');
        const inquiriesData = await inquiriesResponse.json();
        console.log(`📧 문의: ${inquiriesData.total}건`);
        
        console.log('\n현재 데이터 확인 완료!\n');
        
        return {
            reviews: reviewsData.total,
            references: referencesData.total,
            inquiries: inquiriesData.total
        };
    } catch (error) {
        console.error('❌ 데이터 확인 중 오류 발생:', error);
    }
}

// 브라우저 콘솔에서 사용할 수 있도록 전역으로 노출
if (typeof window !== 'undefined') {
    window.initializeData = initializeData;
    window.checkData = checkData;
    
    console.log('💡 데이터 초기화 스크립트가 로드되었습니다!');
    
    // 페이지 로드 시 자동으로 데이터 확인 및 초기화
    window.addEventListener('load', async () => {
        try {
            // 현재 데이터 확인
            const reviewsResponse = await fetch('tables/reviews?limit=1');
            const reviewsData = await reviewsResponse.json();
            
            const referencesResponse = await fetch('tables/references?limit=1');
            const referencesData = await referencesResponse.json();
            
            // 데이터가 없으면 자동으로 초기화
            if (reviewsData.total === 0 || referencesData.total === 0) {
                console.log('🔄 데이터가 비어있습니다. 자동으로 샘플 데이터를 추가합니다...');
                await initializeData();
                
                // 페이지 새로고침하여 데이터 표시
                setTimeout(() => {
                    console.log('✨ 데이터 추가 완료! 페이지를 새로고침합니다...');
                    window.location.reload();
                }, 2000);
            } else {
                console.log('✅ 데이터가 이미 존재합니다!');
                console.log(`📝 리뷰: ${reviewsData.total}건, 📚 레퍼런스: ${referencesData.total}건`);
            }
        } catch (error) {
            console.error('❌ 데이터 확인 중 오류:', error);
        }
    });
}

// 모듈로 내보내기 (필요한 경우)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeData,
        checkData,
        sampleReviews,
        sampleReferences
    };
}
