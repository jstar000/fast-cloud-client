import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    svgr({
      svgrOptions: {
        exportType: 'named', // SVG를 컴포넌트 이름으로 import
        ref: true, // JavaScript로 SVG에 직접 접근 가능(useRef 등)
        svgo: false, // 원본 SVG 파일 그대로 import, 최적화 비활성화
        titleProp: true, // SVG에 <Logo title="" />과 같이 title 추가 가능(접근성 증대)
      },
      include: '**/*.svg',
    }),
  ],
});
