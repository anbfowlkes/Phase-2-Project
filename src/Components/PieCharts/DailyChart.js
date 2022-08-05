import {
    PieChart,
    Pie,
    Legend,
    Cell,
    ResponsiveContainer,
    Label
} from "recharts";
import '../Styles/Results.css'

//https://technostuf.com/react-pie-chart-using-recharts-with-legend-and-custom-label/
const DailyChart = ({ dailyMoneySpent, dailyMoneyAvailable }) => {

    const data = [
        { name: 'Daily Money Left', value: dailyMoneyAvailable },
        { name: 'Daily Money Spent', value: dailyMoneySpent }
    ];

    const COLORS = ['#118C4F', 'red'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <>
            <div>
                {/* <div class="row d-flex justify-content-center text-center">
                    <hr />
                    <div className="col-md-8"> */}
                        <ResponsiveContainer width={700} height={700} className="text-center">
                            <PieChart width={400} height={400} >
                        <Legend layout="horizontal" verticalAlign="left" align="center" iconSize={28} />
                                <Pie
                                    data={data}
                                    cx="49%"
                                    cy="47%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={200}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    {/* </div>
                </div> */}
            </div>
        </>
    )
}

export default DailyChart