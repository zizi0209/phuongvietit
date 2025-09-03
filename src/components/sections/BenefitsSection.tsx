import Section from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { v: "30–50%", k: "Giảm tồn kho" },
  { v: "↑2x", k: "Vòng quay đơn hàng" },
  { v: "99%", k: "Minh bạch dữ liệu" },
];

export default function BenefitsSection() {
  return (
    <Section className="brand-surface">
      <div className="mx-auto max-w-3xl text-center">
        <span className="rounded-full bg-[color-mix(in_oklab,var(--brand-green),transparent_85%)] px-3 py-1 text-xs font-medium text-[var(--brand-green)]">
          Lợi ích
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Giá trị mang lại cho doanh nghiệp
        </h2>
        <p className="mt-2 text-muted-foreground">
          Hiệu quả vận hành tăng, chi phí tối ưu, dữ liệu minh bạch.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <Card key={s.k} className="border-muted/70">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-extrabold text-[var(--brand-green)]">
                {s.v}
              </div>
              <div className="mt-1 text-sm">{s.k}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Before / After */}
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <Card className="border-muted/70">
          <CardContent className="p-6">
            <div className="font-semibold">Trước khi dùng ERP</div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Dữ liệu rời rạc, nhập liệu trùng lặp</li>
              <li>Báo cáo muộn, quyết định chậm</li>
              <li>Khó kiểm soát tồn kho & công nợ</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="border-[color-mix(in_oklab,var(--brand-green),transparent_70%)]">
          <CardContent className="p-6">
            <div className="font-semibold">Sau khi dùng PV-ERP</div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Dữ liệu hợp nhất, realtime</li>
              <li>Quy trình chuẩn, giảm sai sót thủ công</li>
              <li>Quản trị kho – tài chính – KPI rõ ràng</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
