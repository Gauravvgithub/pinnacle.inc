"use client";
import { useState, useEffect } from "react";

export default function Counterup() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  // Final values for counters
  const finalCounts = [80, 40, 25, 60]; 

  // Labels for each counter
  const labels = ["Projects", "Clients", "Years of Experience", "Manpower"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) =>
          count < finalCounts[i] ? count + 1 : count
        )
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid py-5 text-white" style={{backgroundColor:"#CD1C18", marginBottom:"40px"}}>
      <div className="container">
        <div className="row text-center">
          {finalCounts.map((_, index) => (
            <div key={index} className="col-6 col-md-3 mb-4">
              <h2 className="fw-bold text-white">
                {counts[index]}+
              </h2>
              <p className="mb-0 fw-bold text-white">{labels[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
