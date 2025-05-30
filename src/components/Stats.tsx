import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Database, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Active Clients",
    value: "500+",
    description: "Satisfied customers worldwide",
    icon: Users,
  },
  {
    title: "Leads Generated",
    value: "1M+",
    description: "High-quality leads delivered",
    icon: Target,
  },
  {
    title: "Data Points",
    value: "10M+",
    description: "Data points processed",
    icon: Database,
  },
  {
    title: "Success Rate",
    value: "98%",
    description: "Client satisfaction rate",
    icon: TrendingUp,
  },
];

export function Stats() {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="border-none shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
