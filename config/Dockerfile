FROM node:18

# 앱 작업 디렉토리 설정
WORKDIR /app

# 코드 복사
COPY . .

# 의존성 설치
RUN npm install

# 포트 (예: 3000번) 개방
EXPOSE 3000

# 서버 실행 (파일명에 맞게 수정)
CMD ["node", "app.js"]
