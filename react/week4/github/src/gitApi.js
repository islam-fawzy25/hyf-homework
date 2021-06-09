import React, { useState, useEffect,useContext } from "react";

export const ApiData = React.createContext();
const GitHubApi = ()=>{
   const hyfApi = 'https://api.github.com/orgs/HackYourFuture-CPH/repos'

  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

//   const fetchFunc = async () => {
//     try {
//       await fetch(`https://api.github.com/orgs/HackYourFuture-CPH/repos`)
//         .then((response) => {
//           if (!response.ok) {
//             throw Error(" Could not  fetch the data ");
//           } else {
//             return response.json();
//           }
//         })
//         .then((apiData) => {
//             console.log(apiData.map(item=>item.name));
//           setData(apiData.items);
        
//         });
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchFunc();
//   }, []);
//   return (
//     <div>
     
   
//     </div>
//   );

// }
const fetchFunc = async () => {
    try {
      await fetch(`https://api.github.com/repos/islam-fawzy25/hyf-homework/contents/react`)
        .then((response) => {
          if (!response.ok) {
            throw Error(" Could not  fetch the data ");
          } else {
            return response.json();
          }
        })
        .then((apiData) => {
           console.log(apiData.map(item=>item.name));
          setData(apiData.items);
        
        });
    } catch (error) {
      setError(error.message)
    }
  };

  useEffect(() => {
    fetchFunc();
  }, []);
  return (
    <div>
     
    </div>
  );

}
export default GitHubApi;