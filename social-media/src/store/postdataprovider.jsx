import { createContext, useReducer, useState } from "react";

export const Postdata = createContext({
  postlistdata: [],
  addpost: () => {},
  deletepost: () => {},
  // handleonclickHome: () => {},
  addApiPosts: () => {},
});

const reducerpost = (currentpost, action) => {
  let newpost = currentpost;
  if (action.type === "DELETE") {
    newpost = currentpost.filter((post) => post.id !== action.payload.id);
  } else if (action.type === "ADDPOST") {
    newpost = [action.payload, ...currentpost];
  } else if (action.type == "ADDAPIPOSTS") {
    newpost = action.payload.posts;
  }
  return newpost;
};
function Postdataprovider({ children }) {
  const [selecttab, setselectedtab] = useState("Home");

  const addApiPosts = (posts) => {
    dispatchpostlist({
      type: "ADDAPIPOSTS",
      payload: {
        posts,
      },
    });
  };
  const addpost = (
    idvalue,
    titlevalue,
    bodyvalue,
    tagsvalue,
    reactionsvalue
  ) => {
    dispatchpostlist({
      type: "ADDPOST",
      payload: {
        id: idvalue,
        title: titlevalue,
        body: bodyvalue,
        tags: tagsvalue,
        reactions: reactionsvalue,
      },
    });
  };
  const deletepost = (id) => {
    dispatchpostlist({
      type: "DELETE",
      payload: {
        id,
      },
    });
  };
  const defaultpost = [
    {
      id: 1,
      title: "lovely dayyyy",
      body: "day spent well with loved ones....alhamdulillahh",
      tags: ["shukriyaallah", "love", "greatvibes", "familyy"],
      reactions: 22,
    },
    {
      id: 2,
      title: "hapning dayyyy",
      body: "a whole day spent well with interesting activities....alhamdulillahh",
      tags: ["wholeday", "greattime", "familyy"],
      reactions: 29,
    },
    {
      id: 3,
      title: "just the day never beforee",
      body: "a great memorable day with loved one....alhamdulillahh",
      tags: ["love", "familyy"],
      reactions: 90,
    },
  ];

  const [postlistdata, dispatchpostlist] = useReducer(reducerpost, []);
  return (
    <>
      <Postdata.Provider
        value={{
          selecttab,
          setselectedtab,
          postlistdata,
          addpost,
          deletepost,
          // handleonclickHome,
          addApiPosts,
        }}
      >
        {children}
      </Postdata.Provider>
    </>
  );
}
export default Postdataprovider;
