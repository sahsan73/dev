import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [cnt, setCnt] = useState(0);

  const date = new Date(); // current date and time
  // date will be future if cnt > 0 and past if cnt < 0
  date.setDate(date.getDate() + cnt);
  // console.log(date);

  let content = null;
  if (cnt < 0) content = `${Math.abs(cnt)} days ago was ${date.toDateString()}`;
  else if (cnt === 0) content = `Today is ${date.toDateString()}`;
  else content = `${cnt} days from today is ${date.toDateString()}`;

  return (
    <div className="container">
      <div className="row">
        <button onClick={() => setStep(step => step - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep(step => step + 1)}>+</button>
      </div>

      <div className="row">
        <button onClick={() => setCnt(cnt => cnt - step)}>-</button>
        <span>Count: {cnt}</span>
        <button onClick={() => setCnt(cnt => cnt + step)}>+</button>
      </div>

      <p>{content}</p>
    </div>
  );
}
