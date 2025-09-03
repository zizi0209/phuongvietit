import Section from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Layers, LineChart } from "lucide-react";
import Image from "next/image";

const pillars = [
  {
    icon: Layers,
    t: "Dữ liệu hợp nhất",
    d: "Một nguồn sự thật duy nhất (SSOT) xuyên suốt Sales → Kho → Tài chính.",
  },
  {
    icon: ShieldCheck,
    t: "Quy trình chuẩn hoá",
    d: "RBAC, phê duyệt nhiều cấp, nhật ký thao tác & kiểm soát rủi ro.",
  },
  {
    icon: LineChart,
    t: "Báo cáo realtime",
    d: "Dashboard theo vai trò, KPI & cảnh báo, quyết định tức thời.",
  },
];

export default function ChallengesSolutionSection() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <Badge className="brand-chip">Giải pháp</Badge>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Chuẩn hoá quy trình end-to-end với PV-ERP
        </h2>
        <p className="mt-2 text-muted-foreground">
          Tích hợp liền mạch các phòng ban, giảm sai sót, tăng tốc độ xử lý.
        </p>
      </div>

      <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
        <div className="grid gap-4">
          {pillars.map(({ icon: Icon, t, d }) => (
            <Card key={t} className="brand-border transition hover:shadow-sm">
              <CardContent className="flex gap-4 p-6">
                <span className="rounded-lg bg-[color-mix(in_oklab,var(--brand-lime),transparent_84%)] p-2">
                  <Icon className="h-5 w-5 text-[var(--brand-green)]" />
                </span>
                <div>
                  <div className="font-semibold">{t}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
          <Image
            src="/preview.png"
            alt="PV-ERP Solution Overview"
            width={1100}
            height={700}
            className="h-auto w-full"
          />
        </div>
      </div>
    </Section>
  );
}
