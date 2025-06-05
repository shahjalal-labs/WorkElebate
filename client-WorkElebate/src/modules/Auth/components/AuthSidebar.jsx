const AuthSidebar = () => {
  return (
    <div className=" bg-base-200 p-3 flex flex-col gap-8">
      <h2 className="text-2xl font-bold text-primary">
        Why Log In to WorkElevate?
      </h2>

      {/* Card 1: Personalized Jobs */}
      <div className="card shadow-lg bg-base-100">
        <div className="card-body">
          <h3 className="card-title text-lg text-primary">
            🎯 Smart Job Matches
          </h3>
          <p>
            Get personalized job recommendations based on your skills,
            interests, and career goals — no more random listings.
          </p>
        </div>
      </div>

      {/* Card 2: Application Tracker */}
      <div className="card shadow-lg bg-base-100">
        <div className="card-body">
          <h3 className="card-title text-lg text-primary">
            📊 Track Your Applications
          </h3>
          <p>
            Stay on top of every opportunity. Monitor your application status
            from applied to hired, all in one dashboard.
          </p>
        </div>
      </div>

      {/* Card 3: Apply Faster */}
      <div className="card shadow-lg bg-base-100">
        <div className="card-body">
          <h3 className="card-title text-lg text-primary">
            ⚡ Apply in One Click
          </h3>
          <p>
            Save time with your stored profile and resume — apply to jobs
            instantly with just one click.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthSidebar;
