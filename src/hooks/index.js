

export const useChangeText = (key, value, setValues, values) => {

  setValues({ ...values, [key]: value });

  return (key, value, setValues, values) =>
    setValues({ ...values, [key]: value });
};
