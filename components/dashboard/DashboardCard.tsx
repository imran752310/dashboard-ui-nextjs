import { Card, CardContent } from "@/components/ui/card";
import {LucideIcon, MoveRight } from "lucide-react";

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
  return (
    <div>
      <Card className="shadow dark:bg-slate-800  rounded-md">
        <CardContent>
          <div className="flex justify-between gap-5 items-center">
            <div className="">{icon}</div>
            <div>
              <h3 className="text-xl text-center mb-2 font-semibold text-gray-500">
                {title}
              </h3>
              <h3 className="text-3xl font-semibold text-slate-500 dark:text-slate-200 text-end">
                {count}
              </h3>
            </div>
          </div>
          <div className="border-t mt-4 pt-4">
                <button className="flex gap-2 items-center cursor-pointer">View Details <MoveRight size={20}/></button> 
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCard;
