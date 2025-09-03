import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function QuickCTASection() {
  return (
    <Section className="p-0">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border shadow-sm">
        <div className="bg-[linear-gradient(135deg,var(--brand-green),var(--brand-lime))] px-6 py-10 text-white md:px-10">
          <div className="grid items-center gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold">
                Sẵn sàng chuẩn hoá vận hành với PV-ERP?
              </h3>
              <p className="mt-1 text-white/90">
                Nhận demo miễn phí và lộ trình triển khai trong 30 phút.
              </p>
            </div>
            <div className="flex justify-start md:justify-end">
              <Link href="#lien-he">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-foreground hover:bg-white/90"
                >
                  Liên hệ ngay
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
