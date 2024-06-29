import { api } from "@/api";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function KeyPage() {
  React.useEffect(() => {
    const func = () => {
      return api.keys.find(1, 10);
    };
    console.log(func());
  }, []);
  
  return (
    <div className="grid gap-4 md:gap-8 lg:grid-cols-1">
      <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Access Keys</CardTitle>
            <CardDescription>Recent Access Keys.</CardDescription>
          </div>
          <Button asChild size="sm" className="ml-auto gap-1">
            <Link to="#">
              New
              <Plus className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Access Key</TableHead>
                <TableHead>Expired At</TableHead>
                <TableHead>Expired At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>

                <TableCell>
                  <div className="font-medium">Liam Johnson</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    liam@example.com
                  </div>
                </TableCell>
              
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
