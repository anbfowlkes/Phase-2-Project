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
const LossesChart = ({ debtSum, taxSum, billSum }) => {

    const data = [
        { name: 'Yearly Debt', value: debtSum },
        { name: 'Yearly Taxes', value: taxSum },
        { name: 'Yearly Bills', value: billSum }
    ];


    const COLORS = ['#E38627', '#C13C37', '#6A2135'];

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
                    <PieChart width={500} height={500}>
                        <Legend layout="horizontal" verticalAlign="left" align="center" iconSize={28} />
                        <Pie
                            data={data}
                            cx="49%"
                            cy="48%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={275}
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

export default LossesChart