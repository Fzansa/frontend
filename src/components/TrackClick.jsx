import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TrackClick = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const handleClickFind = () => {
    const extractedValue = url.split("/").pop();
    navigate(`/url/analytics/${extractedValue}`);
  };
  return (
    <div>
      <section id="urlbox">
        <h1>URL Click Counter</h1>
        <div id="formurl">
          <input
            type="text"
            name="u"
            placeholder="Enter the link here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="buttonSearch" onClick={handleClickFind}>
            Track Link
          </button>
        </div>

        {
          <div className="otherLinkContainer">
            <div className="longUrlContainer">
              Example : https://shrt-two.vercel.app/qsdFo9Jb7
            </div>
          </div>
        }
      </section>
    </div>
  );
};

export default TrackClick;
