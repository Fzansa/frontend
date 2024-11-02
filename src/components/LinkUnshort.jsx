import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../utils/constents";

const LinkUnshort = () => {
  const navigate = useNavigate();
  let { shortId } = useParams();
  const [url, setUrl] = useState("");
  const [click, setClick] = useState(0);
  const [unshortedUrl, setUnshortedUrl] = useState("");

  const handleUnshortUrl = async () => {
    const extractedValue = url.split("/").pop();
    navigate(`/url/show-destination/${extractedValue}`);
  };

  return (
    <div>
      <section id="urlbox">
        <h1>Unshorten URL</h1>
        <div id="formurl">
          <input
            type="text"
            name="u"
            placeholder="Enter the link here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="buttonSearch" onClick={handleUnshortUrl}>
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

export default LinkUnshort;
