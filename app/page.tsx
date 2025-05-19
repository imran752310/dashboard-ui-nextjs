import AnalyticCricle from "@/components/dashboard/AnalyticCircle";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import { Folder, MessageCircle, Newspaper } from "lucide-react";

export default function Home() {
  return (
   <>
   <div className="w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-4  mb-8">
    <DashboardCard 
      title ="Total Users"
      count={1200}
      icon={<MessageCircle className="text-purple-900 bg-purple-100 p-2 rounded-md" size={52} />}
      />
     <DashboardCard 
      title ="Categories"
      count={100}
      icon={<Folder className="text-blue-900 bg-blue-100 p-2 rounded-md" size={52} />}
      />
      <DashboardCard 
      title ="Posts"
      count={100}
      icon={<Newspaper className="text-yellow-900 bg-yellow-100 p-2 rounded-md" size={52} />}
      />
       <DashboardCard 
      title ="Comments"
      count={1200}
      icon={<MessageCircle className="text-green-900 bg-green-100 p-2 rounded-md" size={52} />}
      />
    </div>
    <div className="flex py-5 gap-4">
      <div className="w-2/3">
         <AnalyticsChart />
      </div>
      <div className="w-1/3">
      <AnalyticCricle />
      </div>
    </div>
   
    <PostsTable title="Latest Posts" />
   </>
  );
}
