import eslintPlugin from "@nabla/vite-plugin-eslint";
import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({mode}) => ({
    plugins: [
        react(),
        checker({
            typescript: true,
            eslint: false,
            overlay: false,
        }),
        mode === "dev" && eslintPlugin(),
        tsconfigPaths(),
    ],
    server: {
        open: true,
    },
}));
