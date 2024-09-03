// // ShiftSchedule.jsx
// import ShiftCard from "./ShiftCard";
// import css from "./ShiftSchedule.module.css";
//
// const ShiftSchedule = ({ schedule }) => {
//   const today = new Date().getDate();
//   const tomorrow = today + 1;
//
//   const shiftTime = (shift) => {
//     switch (shift) {
//       case "1":
//         return "9:30-18:30";
//       case "2":
//         return "10:30-19:30";
//       case "3":
//         return "11:30-20:30";
//       case "вих":
//         return "Вихідний";
//       default:
//         return "Невідомо";
//     }
//   };
//
//   return (
//     <div className={css.scheduleContainer}>
//       {schedule.map((row, index) => {
//         const [name, ...shifts] = row.split("\t");
//         const todayShift = shiftTime(shifts[today - 1]);
//         const tomorrowShift = shiftTime(shifts[tomorrow - 1]);
//
//         return (
//           <ShiftCard
//             key={index}
//             name={name}
//             todayShift={todayShift}
//             tomorrowShift={tomorrowShift}
//           />
//         );
//       })}
//     </div>
//   );
// };
//
// export default ShiftSchedule;
