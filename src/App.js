import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { API_URL } from './utils/constents';

function App() {
  const navigate = useNavigate();
  const [url, setUrl] = useState('');
  const [shortId, setShortId] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [longUrl, setLongUrl] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const handleGenrateUrl = async () => {
    try {
      const res = await axios.post(API_URL, { url: url });
      const data = await res.data;
      setShortId(data?.shortId)
      localStorage.setItem('shortId', data?.shortId);
      localStorage.setItem('shortURL', `${API_URL}/${data?.shortId}`);
      let formattedUrl = url;

      // Check if the URL does not start with "http" or "https"
      if (url && !url.startsWith("http://") && !url.startsWith("https://")) {
        formattedUrl = `https://${url}`;
      }
      localStorage.setItem('longURL', formattedUrl);
    } catch (error) {
      console.log(error)
    }
  }

  const handleNavigate = () => {
    // window.open(`http://localhost:8000//{shortId}`, '_blank');
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl); // Copy text to clipboard
      setIsCopied(true); // Update status to copied
      setTimeout(() => setIsCopied(false), 2000); // Reset copy status after 2 seconds
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  }

  useEffect(() => {
    let srtURL = localStorage.getItem('shortURL');
    let lngURL = localStorage.getItem('longURL');
    let srtId = localStorage.getItem('shortId');
    if (srtURL !== null && lngURL !== null) {
      setShortUrl(srtURL);
      setLongUrl(lngURL);
      setShortId(srtId);
    }
  }, [shortId, shortUrl, longUrl])
  return (
    <div className="App">
      <section id="urlbox">
        <h1>{shortId !== "" ? "Your Shorted Url" : "Paste the URL to be shortened"}</h1>
        <div id="formurl">
          <input type="text" name="u" placeholder="Enter the link here" value={shortId !== "" ? shortUrl : url} onChange={(e) => setUrl(e.target.value)} />
          <button className='buttonSearch' onClick={shortId !== '' ? handleCopy : handleGenrateUrl}>{shortId !== "" ? isCopied ? "Copied!" : "Copy" : "Shorten URL"}</button>
        </div>
        {
          shortId === "" && <p>ShortURL is a free tool to shorten URLs and generate short links
            URL shortener allows to create a shortened link making it easy to share
          </p>
        }
        {
          shortId !== "" && <div className='otherLinkContainer'>
            <div className='longUrlContainer' >
              Long URL:<a href={longUrl} target='blank' >{longUrl}</a>
            </div>
            <Link to={`/url/analytics/${shortId}`} className='bigButton' >Total of clicks of your short URL</Link>
            <button className='bigButton' onClick={() => { localStorage.clear(); setLongUrl(''); setShortId(''); setShortUrl(''); setUrl(''); }} >Shorten Another URL</button>
          </div>
        }

        {/* <p class="boxtextcenter">ShortURL is a free tool to shorten URLs and generate short links<br>URL shortener allows to create a shortened link making it easy to share<br/>Create a premium account to shorten unlimited URLs with more features for your projects--></p> */}
      </section>

    </div>
  );
}

export default App;
