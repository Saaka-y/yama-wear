
import { useEffect, useState } from "react";

export function DateSelect({ className }) {

  const [dateOptions, setDateOptions] = useState([]); // ①選択肢を初回レンダー時に生成
  const [selectedDate, setSelectedDate] = useState(null); // ②日付を選んだ後
  const [isSelected, setIsSelected] = useState(false); // 日付が選ばれたかどうかの状態管理

  // ①{
  //     date: Date, 
  //     label: string, 
  //     isSelected: boolean 
  //.  }

  // ②{ APIに送る形式に合わせて変える必要あり
  //     date: Date, 
  //   }

  // 初回レンダー時に選択肢を生成
  useEffect(() => {
    const today = new Date();
    const days = 5;
    const options = [];

    for (let i = 0; i <= days; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const label =
        i === 0
          ? "Today"
          : i === 1
            ? "Tomorrow"
            : `${i} days later`;

      options.push({
        date,
        label,
        isSelected: false,
        value: date.toISOString().split("T")[0], // YYYY-MM-DD形式
      });
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDateOptions(options);
    console.log("Date options set:", options)
  }, []);


  const handleDateSelect = (e) => {
    const selected = dateOptions.find(opt => opt.value === e.target.value);
    setSelectedDate(selected);
    setIsSelected(true);
  }


  return (
    <div className={className}>
      <select
        value={selectedDate?.value || ""}
        onChange={handleDateSelect}
        className="bg-white border-2 border-gray-300 rounded-md p-2 m-2"
      >
        <option value="">Select a date</option>
        {dateOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label} ({opt.date.toDateString()})
          </option>
        ))}
      </select>

      {selectedDate && (
        <div className="mt-2 text-black">
          Selected: {selectedDate.label} ({selectedDate.date.toDateString()})
        </div>
      )}
    </div>
  );
}
