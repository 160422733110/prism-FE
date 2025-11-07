import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Download, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const demandData = [
  { month: "Jun", demand: 1900 },
  { month: "Jul", demand: 2100 },
  { month: "Aug", demand: 2300 },
  { month: "Sep", demand: 2200 },
  { month: "Oct", demand: 2400 },
  { month: "Nov", demand: 2600 },
];

const forecastTable = [
  { material: "Steel Rods (TMT)", month: "Jun 2025", demand: 450, confidence: 92, note: "High priority" },
  { material: "Cement (Grade 53)", month: "Jun 2025", demand: 1200, confidence: 94, note: "" },
  { material: "Copper Wire", month: "Jul 2025", demand: 350, confidence: 88, note: "Supplier delay risk" },
  { material: "Insulators", month: "Jul 2025", demand: 800, confidence: 91, note: "" },
  { material: "Transformers", month: "Aug 2025", demand: 12, confidence: 85, note: "Long lead time" },
];

const Forecast = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Demand Forecast</h1>
          <p className="text-muted-foreground mt-2">AI-generated predictions for next 6 months</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="gap-2">
            <FileText className="h-4 w-4" />
            Export CSV
          </Button>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Forecast Progress */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Forecast Generation</CardTitle>
            <span className="text-sm text-success font-medium">Complete</span>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={100} className="mb-2" />
          <p className="text-sm text-muted-foreground">Analysis complete with 94% confidence</p>
        </CardContent>
      </Card>

      {/* Demand Trend Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Predicted Material Demand Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={demandData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)"
                }}
              />
              <Line
                type="monotone"
                dataKey="demand"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--primary))", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Forecast Table */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Forecast Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Material</TableHead>
                <TableHead>Month</TableHead>
                <TableHead className="text-right">Predicted Demand</TableHead>
                <TableHead className="text-right">Confidence</TableHead>
                <TableHead>Note</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {forecastTable.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.material}</TableCell>
                  <TableCell>{row.month}</TableCell>
                  <TableCell className="text-right">{row.demand.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant={row.confidence >= 90 ? "default" : "secondary"}>
                      {row.confidence}%
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{row.note || "—"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Forecast;
