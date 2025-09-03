import Section from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShoppingCart,
  Handshake,
  Warehouse,
  Wallet,
  Users,
  Factory,
  BarChart3,
  Truck,
} from "lucide-react";

const mods = [
  { icon: ShoppingCart, name: "Sales" },
  { icon: Handshake, name: "Purchase" },
  { icon: Warehouse, name: "Warehouse" },
  { icon: Wallet, name: "Finance" },
  { icon: Users, name: "HR" },
  { icon: Factory, name: "Manufacturing" },
  { icon: BarChart3, name: "Reports" },
  { icon: Truck, name: "Logistics" },
];

export default function ERPPreviewSection() {
  return (
    <Section className="bg-secondary">
      <div className="mx-auto max-w-3xl text-center">
        <span className="rounded-full bg-[color-mix(in_oklab,var(--brand-green),transparent_85%)] px-3 py-1 text-xs font-medium text-[var(--brand-green)]">
          Một nền tảng – Kết nối toàn diện
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Các module cốt lõi
        </h2>
        <p className="mt-2 text-muted-foreground">
          Kết nối bán hàng, mua hàng, kho, tài chính, nhân sự, sản xuất,
          logistics và báo cáo.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mods.map(({ icon: Icon, name }) => (
          <Card
            key={name}
            className="border-muted/70 transition hover:-translate-y-0.5 hover:shadow-sm"
          >
            <CardContent className="flex items-center gap-3 p-5">
              <span className="rounded-lg bg-[color-mix(in_oklab,var(--brand-lime),transparent_86%)] p-2">
                <Icon className="h-5 w-5 text-[var(--brand-green)]" />
              </span>
              <span className="font-medium">{name}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
