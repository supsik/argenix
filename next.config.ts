import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  partialPrefetching : true,
  cacheComponents    : true,
  devIndicators      : false,
  sassOptions: {
    includePaths: [path.join(process.cwd(), "src", "assets", "styles")],
    additionalData: `@use "${path.join(process.cwd(), "src", "assets", "styles", "variables").replace(/\\/g, "/")}" as *;`,
  },
};

export default nextConfig;