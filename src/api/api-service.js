export const years = () => {
  const y = [];
  for (let i = 1995; i < 2024; i++) {
    y.push(i);
  }
  return y;
};

export const mockMakes = [
  { Make_ID: 449, Make_Name: "MERCEDES-BENZ" },
  { Make_ID: 467, Make_Name: "CHEVROLET" },
  { Make_ID: 474, Make_Name: "HONDA" },
  { Make_ID: 478, Make_Name: "NISSAN" },
  { Make_ID: 582, Make_Name: "AUDI" }
];

// models api https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${make}/modelyear/${year}?format=json
