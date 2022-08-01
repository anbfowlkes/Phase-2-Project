import { PieChart } from 'react-minimal-pie-chart';

// https://www.npmjs.com/package/react-minimal-pie-chart
// https://medium.com/@tgknapp11/render-a-chart-with-react-minimal-pie-chart-e30420c9276c
const Chart = () => {
    return (
        <div className='chart'>
            <PieChart
                data={[
                    { title: 'One', value: 50, color: '#E38627' },
                    { title: 'Two', value: 40, color: '#C13C37' },
                    { title: 'Three', value: 10, color: '#6A2135' },
                ]}
                //radius={100}
                viewBoxSize={[100, 100]}
            />;
        </div>
    )
}

export default Chart