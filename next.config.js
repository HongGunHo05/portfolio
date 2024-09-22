const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // 정적 파일로 빌드
  images: {
    unoptimized: true, // 이미지 최적화 비활성화
  },
};

module.exports = nextConfig;
