import Banner from "./Banner/Banner";
import UseHelmet from "../../../hooks/useHelmet";
import Jobs from "../../jobs/pages/Jobs";
import { Suspense } from "react";
import Spinner from "../../shared/Layout/Spinner";

const Home = () => {
  // const jobPromise = fetch("https://workelevate-server-part3.vercel.app/jobs").then((res) =>
  const jobPromise = fetch("https://workelevate-server-part3.vercel.app/jobs", {
    credentials: "include",
  }).then((res) => res.json());
  return (
    <div>
      <UseHelmet title="Home" />

      <Banner />
      <Suspense fallback={<Spinner />}>
        <Jobs jobPromise={jobPromise} />
      </Suspense>
    </div>
  );
};

export default Home;
