import React from "react";

const Announcements = () => {
  return (
    <section className="border-4 max-w-[75rem] px-5 my-8 mx-auto">
      <h1>Welcome to The Announcements DashBoard</h1>
      <div className="flex flex-row">
        <div className="">24 july 2024</div>
        <div>
          <h2 className="text-2xl font-bold">Announcements</h2>
          <p className="text-lg">This is a list of all the announcements</p>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
