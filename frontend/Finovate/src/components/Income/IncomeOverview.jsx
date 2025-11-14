import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { prepareIncomeBarChartData } from "../../utils/helper";
import CustomBarChart from "../Charts/CustomBarChart";

const IncomeOverview = ({ transactions, onAddIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Check if transactions exist and is an array
    if (!transactions || transactions.length === 0) {
      console.log("No transactions data");
      setChartData([]);
      return;
    }

    const result = prepareIncomeBarChartData(transactions) || [];
    
    // Normalize to { category, amount }
    const normalized = result.map((item) => ({
      category: item.month || item.source || item.category || "Unknown",
      amount: Number(item.amount || item.value || 0),
    }));

    console.log("Transactions:", transactions);
    console.log("Raw result:", result);
    console.log("Normalized chartData:", normalized);

    setChartData(normalized);
  }, [transactions]);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-lg">Income Overview</h5>
          <p className="text-xs text-gray-400 mt-0.5">
            Track your earning over time and analyze your income trends.
          </p>
        </div>

        <button className="add-btn" onClick={onAddIncome}>
          <LuPlus className="text-lg" />
          Add Income
        </button>
      </div>
      <div className="mt-10">
        <CustomBarChart data={chartData} />
      </div>
    </div>
  );
};

export default IncomeOverview;