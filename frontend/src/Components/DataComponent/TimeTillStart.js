import React from "react";

export const TimeTillStart = (start) => {
  const newDate = new Date();
  let currentDate = newDate.toISOString().split("T")[0];
  const date1 = new Date(start);
  const date2 = new Date(currentDate);
  const difference = date2.getTime() - date1.getTime();
  const final = (difference / 1000 / 60 / 60 / 24);
  return final;
};
