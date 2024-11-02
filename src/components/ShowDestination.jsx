import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../utils/constents";

const ShowDestination = () => {
  const navigate = useNavigate();
  const { shortId } = useParams();
  const [shortUrl, setShortUrl] = useState("");
  const [longUrl, setLongUrl] = useState("");
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get(`${API_URL}/getone/${shortId}`);
      let data = await res.data;
      setShortUrl(`${API_URL}/${shortId}`);
      setLongUrl(data?.entry?.redirectURL)
      console.log(shortUrl)
    };

    getData();
    // setUnshortedUrl(data?.entry?.redirectURL);
  }, [shortId]);
  return (
    <div>
      <section id="urlbox">
        <h1>Long URL</h1>
        {shortId !== "" && (
          <div className="otherLinkContainer">
            <div className="longUrlContainer">
              <a href={shortUrl} target="blank">
                {shortUrl}
              </a>
            </div>
            <div className="longUrl">{longUrl}</div>
            <Link to={`/url/unshort`} className="bigButton">
            Check the destination page of another short URL
            </Link>
            <button
              className="bigButton"
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
            >
              Shorten Another URL
            </button>
          </div>
        )}

      </section>
    </div>
  );
};

export default ShowDestination;
