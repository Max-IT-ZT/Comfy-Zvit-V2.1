// // DataInput.jsx
// import { useState } from "react";
// import ShiftSchedule from "./ShiftSchedule";
//
// const DataInput = () => {
//   const [inputData, setInputData] = useState("");
//   const [scheduleData, setScheduleData] = useState([]);
//
//   const handleUpdateSchedule = () => {
//     const newSchedule = inputData.split("\n");
//     setScheduleData(newSchedule);
//     setInputData("");
//   };
//
//   return (
//     <div>
//       <textarea
//         value={inputData}
//         onChange={(e) => setInputData(e.target.value)}
//         placeholder="Вставте дані з Google Таблиць тут..."
//         rows={5}
//         style={{ width: "100%", marginBottom: "20px" }}
//       />
//       <button onClick={handleUpdateSchedule}>Оновити графік</button>
//       {scheduleData.length > 0 && <ShiftSchedule schedule={scheduleData} />}
//     </div>
//   );
// };
//
// export default DataInput;
