export function withBasePath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  // Nếu đã là absolute URL (http...), hoặc đã bắt đầu bằng basePath rồi thì giữ nguyên
  if (/^https?:\/\//i.test(path) || path.startsWith(base + "/")) return path;
  // Nếu là đường dẫn tuyệt đối trong public (bắt đầu bằng /), prepend base
  if (path.startsWith("/")) return `${base}${path}`;
  // Nếu là tương đối (e.g. 'logo.png'), cũng prepend để chắc chắn
  return `${base}/${path}`;
}
