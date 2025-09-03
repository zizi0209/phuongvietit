import Section from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactInfo() {
  return (
    <Section className="bg-secondary">
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-muted/70">
          <CardContent className="p-6">
            <div className="font-semibold">
              CÔNG TY TNHH CNTT & MÔI TRƯỜNG PHƯƠNG VIỆT
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              133/2A Trần Hưng Đạo, P. An Phú, Q. Ninh Kiều, Cần Thơ
            </div>
          </CardContent>
        </Card>
        <Card className="border-muted/70">
          <CardContent className="p-6">
            <div className="font-semibold">Liên hệ</div>
            <div className="mt-2 text-sm">📞 0706 780790</div>
            <div className="text-sm">✉️ phuongviet.ite@gmail.com</div>
          </CardContent>
        </Card>
        <Card className="border-muted/70">
          <CardContent className="p-6">
            <div className="font-semibold">Giờ làm việc</div>
            <div className="mt-2 text-sm">Thứ 2–6: 8:00–17:30</div>
            <div className="text-sm">Thứ 7: 8:00–12:00</div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
