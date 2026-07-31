// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// A plugin to serve Lovable assets from the local src/assets folder
const localAssetsPlugin = () => ({
  name: "local-assets-fallback",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url && req.url.includes("/__l5e/assets-v1/")) {
        const urlParts = req.url.split("/");
        const filename = urlParts[urlParts.length - 1].split("?")[0];
        const localPath = path.resolve(__dirname, "src", "assets", filename);

        if (fs.existsSync(localPath)) {
          const ext = path.extname(filename).toLowerCase();
          const contentType =
            ext === ".png"
              ? "image/png"
              : ext === ".jpg" || ext === ".jpeg"
                ? "image/jpeg"
                : ext === ".svg"
                  ? "image/svg+xml"
                  : ext === ".webp"
                    ? "image/webp"
                    : "application/octet-stream";

          res.setHeader("Content-Type", contentType);
          fs.createReadStream(localPath).pipe(res);
          return;
        }
      }
      next();
    });
  },
});

export default defineConfig({
  vite: {
    plugins: [localAssetsPlugin()],
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
