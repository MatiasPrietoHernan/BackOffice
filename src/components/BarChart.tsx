import { datasetProduct } from '@/interfaces/IProductsBarChar';
import { IDailyActivityBarChar } from '@/interfaces/IDailyActivityBarChar';

interface BarChartProps {
  data: Array<datasetProduct | IDailyActivityBarChar>;
}

const BarChart = ({ data }: BarChartProps) => {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="flex items-end h-48 gap-3 py-5">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center flex-1">
          <div
            className="w-10 bg-emerald-300 rounded-t-md relative transition-all duration-300 hover:bg-emerald-400"
            style={{ height: `${(item.value / maxValue) * 140}px` }}
          >
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-800">
              {item.value}
            </span>
          </div>
          <div className="mt-2 text-xs text-center text-gray-700">
            {'day' in item ? item.day : item.product}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
