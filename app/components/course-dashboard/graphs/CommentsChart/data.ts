import { faker } from "@faker-js/faker";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

export const barDescriptions = [
  { description: "Comments over time", color: "rgb(82 121 249)" },
];

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const data = {
  labels,
  datasets: [
    {
      label: "No of Comments",
      data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      backgroundColor: "rgb(82 121 249)",
      barPercentage: 0.3,
      borderRadius: 10,
    }
  ],
};
