import type { NextConfig } from "next";
import path from "path";

const stylesPath = path.join(process.cwd(), "src", "assets", "styles").replace(/\\/g, "/");

const nextConfig: NextConfig = {
  partialPrefetching : true,
  cacheComponents    : true,
  devIndicators      : false,
  sassOptions: {
    includePaths: [path.join(process.cwd(), "src", "assets", "styles")],
    additionalData: `
      @use "${stylesPath}/variables" as *;
      @use "${stylesPath}/mixins" as *;
    `,
  },
};

export default nextConfig;