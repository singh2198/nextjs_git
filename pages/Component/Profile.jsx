import React from "react";

function Profile({ profiledata }) {
  //   console.log(profiledata);
  const { avatar_url, bio, followers, following, name } = profiledata;
  return (
    <>
      <div style={{ border: "1px solid red", width: "50%" }}>
        <div>
          <img
            src={avatar_url}
            alt="dummy_img"
            width={"160px"}
            height={"160px"}
          />
        </div>
        <h2>name:{name}</h2>
        <p>bio:{bio}</p>
        <h3>
          followes:{followers}||following:{following}
        </h3>
      </div>
    </>
  );
}

export default Profile;

export async function getStaticProps() {
  let response = await fetch("https://api.github.com/users/singh2198");
  let data = await response.json();
  //   console.log(data);

  return {
    props: {
      profiledata: data,
    },
  };
}
