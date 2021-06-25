export const getData = (apiData) => {
  return {
    type: "SUCCESS",
    payload: apiData,
  };
};

export const makeAPIcall = () => {
  return (dispatch) => {
    const makeCall = async () => {
      const data = await fetch("https://reqres.in/api/unknown")
        .then((res) => res.json())
        .then((data) => data.data)
        .catch((err) => {
          console.log("Error :", err);
        });
      dispatch(getData(data));
    };
    makeCall();
  };
};
