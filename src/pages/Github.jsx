import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageButtons from "../components/PageButtons";
import Posts from "../components/Posts";
import { ClassicSpinner } from "react-spinners-kit";

function Github() {
  const [params] = useSearchParams();
  const page = Number(params.get("page")) || 1;
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    const getRepos = async function (context) {
      await fetch(
        `https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=${page}`
      )
        .then((res) => res.json())
        .then((data) => setRepos(data))
        .catch((err) => console.log(err.message));
    };

    getRepos();
  }, [page]);

  return (
    <div className="bg-slate-300">
      <Header buttonBg="md:bg-custom-bg text-white" />
      <hr />

      {/* Trending posts container */}
      {!repos ? (
        <div className="flex justify-center mt-10">
          <ClassicSpinner size={30} fontColor="#7753da" />
        </div>
      ) : (
        <Posts posts={repos} />
      )}

      {repos && <PageButtons />}

      <Footer />
    </div>
  );
}

export default Github;
