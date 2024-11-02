import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../utils/constents";

const LinkClickCounts = () => {
  // let { shortId } = useParams();
  const [click, setClick] = useState(0);
  const [shortId, setShortId] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const getClickCount = async () => {
      if (shortId !== "") {
        let res = await axios.get(
          `${API_URL}analytics/${shortId}`
        );
        let data = await res.data;
        setClick(data?.totalClicks);
      }
    };

    getClickCount();
  }, [shortId]);

  useEffect(() => {
    let srtURL = localStorage.getItem("shortURL");
    let lngURL = localStorage.getItem("longURL");
    let srtId = localStorage.getItem("shortId");
    if (srtURL !== null && lngURL !== null) {
      setShortUrl(srtURL);
      setLongUrl(lngURL);
      setShortId(srtId);
    }
  }, [shortId, shortUrl, longUrl]);
  return (
    <div>
      <section id="urlbox">
        <h1>Total URL Clicks</h1>
        {shortId === "" && (
          <p>
            ShortURL is a free tool to shorten URLs and generate short links URL
            shortener allows to create a shortened link making it easy to share
          </p>
        )}
        {shortId !== "" && (
          <div className="otherLinkContainer">
            <div className="longUrlContainer">
              <a href={shortUrl} target="blank">
                {shortUrl}
              </a>
            </div>
            <div className="clickContainer">{click}</div>
            <Link to={`/url/track-url`} className="bigButton">
              Track clicks from another short URL
            </Link>
            <button
              className="bigButton"
              onClick={() => {
                localStorage.clear();
                navigate("/");
                // setLongUrl("");
                // setShortId("");
                // setShortUrl("");
                // setUrl("");
              }}
            >
              Shorten Another URL
            </button>
          </div>
        )}

        {/* <p class="boxtextcenter">ShortURL is a free tool to shorten URLs and generate short links<br>URL shortener allows to create a shortened link making it easy to share<br/>Create a premium account to shorten unlimited URLs with more features for your projects--></p> */}
      </section>
    </div>
  );
};

export default LinkClickCounts;
