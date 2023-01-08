import React from "react";

function Project({ projectdata }) {
  console.log(projectdata);
  return <></>;
}

export default Project;

export async function getStaticProps() {
  let response = await fetch(
    "https://api.github.com/search/repositories?q=user:singh2198+fork:true&sort=updated&per_page=10&type=Repositories"
  );
  let data = await response.json();
  //   console.log(data);

  return {
    props: {
      projectdata: data,
    },
  };
}
