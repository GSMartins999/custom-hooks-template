// import axios from "axios";
// import { BASE_URL } from "../constants/constants";
// import { useEffect, useState } from "react";

// export const useCapturarPostagens = () => {
//   const [postagens, setPostagens] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${BASE_URL}comments`)
//       .then((response) => {
//         setPostagens(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   return [postagens];
// };
