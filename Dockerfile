FROM node:18

WORKDIR /app

# 의존성 먼저 복사
COPY package*.json ./
RUN npm install

# 전체 복사
COPY . .

# wait-for-it 실행 권한
RUN chmod +x wait-for-it.sh

EXPOSE 3000

# ✅ bash로 실행!
# CMD ["bash", "./wait-for-it.sh", "db:3306", "--", "node", "app.js"]
CMD ["bash", "./wait-for-it.sh", "db:3306", "--", "npm", "run", "dev"]


