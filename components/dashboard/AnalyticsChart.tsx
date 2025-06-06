'use client';
import { LineChart, Line, XAxis, YAxis,
    CartesianGrid,
    ResponsiveContainer
} from 'recharts';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import data from '@/data/analytics'
const AnalyticsChart = () => {
  return (
    <>
    <Card>
        <CardHeader>
            <CardTitle>Analytics for This Year</CardTitle>
            <CardDescription>Views Per Month</CardDescription>
            <CardContent>
                <div style={{width: '100%', height: 300}}>
                    <ResponsiveContainer>
                        <LineChart width={1100} height={300} data={data}>
                            <Line type='monotone' dataKey='uv' stroke="#8884d8" />
                            <CartesianGrid stroke='#ccc' />
                            <XAxis dataKey='name' />
                            <YAxis />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </CardHeader>
    </Card>
    </>
  )
}

export default AnalyticsChart