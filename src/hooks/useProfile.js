import React, { useEffect, useState } from "react";

const useProfile = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch("https://nameless-refuge-04709.herokuapp.com/part")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  return [profile, setProfile];
};

export default useProfile;
