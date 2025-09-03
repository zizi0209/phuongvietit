import Section from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Rocket, Link2, Gauge } from "lucide-react";

const feats = [
  {
    icon: Gauge,
    title: "Realtime dashboard",
    desc: "Chỉ số vận hành tức thời theo vai trò.",
  },
  {
    icon: ShieldCheck,
    title: "RBAC & audit trail",
    desc: "Phân quyền theo vai, nhật ký thao tác minh bạch.",
  },
  {
    icon: Link2,
    title: "Open API & tích hợp",
    desc: "Kết nối hệ thống DMS, CRM, kế toán và IoT.",
  },
  {
    icon: Rocket,
    title: "Scale-ready",
    desc: "Hạ tầng sẵn sàng tăng trưởng, hiệu năng ổn định.",
  },
];

export default function KeyFeaturesSection() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <span className="rounded-full bg-[color-mix(in_oklab,var(--brand-lime),transparent_85%)] px-3 py-1 text-xs font-medium text-[var(--brand-green)]">
          Tính năng nổi bật
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Xây cho doanh nghiệp — chuẩn enterprise
        </h2>
        <p className="mt-2 text-muted-foreground">
          Bảo mật, mở rộng, tích hợp linh hoạt và báo cáo tức thời.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {feats.map(({ icon: Icon, title, desc }) => (
          <Card
            key={title}
            className="border-muted/70 transition hover:shadow-sm"
          >
            <CardContent className="p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color-mix(in_oklab,var(--brand-green),transparent_86%)]">
                <Icon className="h-5 w-5 text-[var(--brand-green)]" />
              </div>
              <div className="mt-4 font-semibold">{title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
