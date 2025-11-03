import "@styles/Footer.css";
import { Link } from "react-router-dom";
import youtubeLogo from "@assets/images/developed-with-youtube-sentence-case-light.797fec1.png";
import JoinButton from "./ui/JoinButton/JoinButton";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-graphic" />{" "}
        <div className="footer-left-content">
          <Link to="https://hellothematic.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 58.6720009"
              className="footer-logo"
            >
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n              .st0 {\n              fill: #fff;\n              }\n              .st1 {\n              fill: #7c878c;\n              }\n              .st2 {\n              fill: #1c242c;\n              }\n              .st3 {\n              fill: #f2f2f2;\n              }\n              .st4 {\n              fill: #def244;\n              }\n              .st5 {\n              fill: #a6b533;\n              }\n              .st6 {\n              fill: #f2fab4;\n              }\n              .st7 {\n              fill: #63ffbd;\n              }\n              .st8 {\n              fill: #4abf8e;\n              }\n              .st9 {\n              fill: #c1ffe5;\n              }\n              .st10 {\n              fill: #59befe;\n              }\n              .st11 {\n              fill: #438fbf;\n              }\n              .st12 {\n              fill: #bde5ff;\n              }\n              .st13 {\n              fill: #49377c;\n              }\n              .st14 {\n              fill: #312654;\n              }\n              .st15 {\n              fill: #ada8bb;\n              }\n              .st16 {\n              fill: #f21b91;\n              }\n              .st17 {\n              fill: #b5146d;\n              }\n              .st18 {\n              fill: #faa4d3;\n              }\n            ",
                }}
              />{" "}
              <g id="white">
                <g id="horizontal_7_">
                  <g id="wordmark_23_">
                    <circle
                      cx="247.307"
                      cy="29.499"
                      r="1.599"
                      className="st0"
                    />{" "}
                    <path
                      id="thematic_22_"
                      d="M183.109 17.305l11.049 23.857H172.06l11.049-23.857zm-6.994 21.279h13.99l-6.996-15.14-6.994 15.14zM63.497 17.918h16.246v2.578H72.91v20.666h-2.578V20.496h-6.834v-2.578zm40.185 13.301H91.078v9.943H88.5V17.918h2.578V28.64h12.604V17.918h2.578v23.244h-2.578V31.22zm15.592-2.62h10.148v2.579h-10.19v7.406h12.81v2.578h-15.387V17.918h15.386v2.578h-12.767V28.6zm44.645-11.294v23.857h-2.578V24.628l-8.47 10.029-8.471-10.029v16.534h-2.578V17.305l11.049 13.257 11.048-13.257zm34.546.613h16.246v2.578h-6.834v20.666H205.3V20.496h-6.834v-2.578zm25.001 0h2.579v23.244h-2.579V17.918zm29.997 4.214a8.266 8.266 0 0 0-2.907-1.493 12.199 12.199 0 0 0-3.273-.428c-1.282 0-2.49.244-3.622.736a9.21 9.21 0 0 0-2.945 2.004c-.833.847-1.496 1.842-1.986 2.989s-.736 2.358-.736 3.642c0 1.282.246 2.496.736 3.64a9.558 9.558 0 0 0 1.986 2.99 9.211 9.211 0 0 0 2.945 2.002c1.132.493 2.34.74 3.622.74.49 0 1.03-.036 1.616-.103.587-.068 1.208-.205 1.863-.41s1.314-.49 1.985-.86a9.141 9.141 0 0 0 1.9-1.411l1.353 1.8a8.878 8.878 0 0 1-3.828 2.6c-1.513.53-3.13.797-4.848.797-1.637 0-3.18-.313-4.625-.941a12.267 12.267 0 0 1-3.784-2.537c-1.08-1.065-1.93-2.32-2.558-3.766s-.941-2.986-.941-4.623.314-3.18.941-4.625c.628-1.446 1.473-2.702 2.537-3.763a12.094 12.094 0 0 1 3.764-2.54 11.541 11.541 0 0 1 4.625-.939c1.39 0 2.775.252 4.153.757 1.379.504 2.584 1.164 3.622 1.983l-1.595 1.76z"
                      className="st0"
                    />
                  </g>{" "}
                  <g id="logo_23_">
                    <path
                      id="_x3C_Compound_Path_x3E__44_"
                      d="M29.41 1.556c-.032-.052-.116-.052-.147 0L20.34 17.013a.645.645 0 0 0-.499 0l-2.156-3.733c-.03-.053-.114-.053-.144 0l-7.11 12.315a.647.647 0 0 0-.25-.05.636.636 0 0 0-.389.142l-8.134-8.134a.084.084 0 0 0-.132.102l6.745 11.681-6.744 11.681a.08.08 0 0 0 0 .084.082.082 0 0 0 .072.042h13.488l2.454 4.25a.083.083 0 0 0 .072.041c.01 0 .022-.002.032-.006a.084.084 0 0 0 .05-.099l-1.123-4.186h16.422c.032.233.176.43.386.516l-4.125 15.393c-.01.04.01.083.049.1.01.003.022.005.032.005a.086.086 0 0 0 .073-.041l16.015-27.738a.087.087 0 0 0 0-.084L29.409 1.556zm4.606 38.996a.636.636 0 0 0-.389-.142.645.645 0 0 0-.249.05l-6.13-10.618a.632.632 0 0 0 .244-.422h17.656L34.016 40.552zm-20.061-11.3a.633.633 0 0 0-.244-.423l6.13-10.617a.644.644 0 0 0 .5 0l6.13 10.617a.633.633 0 0 0-.245.423H13.955zm-3.774-2.408c.149 0 .279-.058.389-.142l2.245 2.245a.636.636 0 0 0-.143.389c0 .359.291.65.65.65.03 0 .054-.013.083-.017l2.95 11.007h-1.17l-6.72-11.64 1.466-2.542c.077.032.161.05.25.05zM29.336 1.765l15.87 27.487H27.492a.642.642 0 0 0-.882-.516L20.48 18.12a.638.638 0 0 0 .26-.506.638.638 0 0 0-.26-.507l8.856-15.34zM17.613 13.49l2.089 3.617a.638.638 0 0 0-.261.507c0 .21.106.388.26.506l-6.13 10.618a.646.646 0 0 0-.249-.05.636.636 0 0 0-.389.142l-2.245-2.246a.636.636 0 0 0 .142-.388.638.638 0 0 0-.26-.507l7.043-12.2zM1.989 18.12l7.685 7.685a.636.636 0 0 0-.143.389c0 .21.106.388.26.507l-1.423 2.467L1.989 18.12zm-.245 22.855l6.623-11.473 6.624 11.473H1.744zm15.624 3.781l-2.087-3.614h1.118l.969 3.614zm-3.8-14.821a.643.643 0 0 0 .387-.516h12.271a.642.642 0 0 0 .883.515l6.13 10.617a.633.633 0 0 0-.245.424H16.528l-2.96-11.04zm16.014 26.546l3.963-14.79c.028.004.053.017.082.017a.65.65 0 0 0 .65-.65.636.636 0 0 0-.143-.388L44.96 29.845 29.582 56.482z"
                      className="st0"
                    />{" "}
                    <path
                      id="_x3C_Compound_Path_x3E__43_"
                      d="M45.538 29.227L30.303 2.84c.375-.293.632-.729.632-1.241a1.599 1.599 0 1 0-3.198 0c0 .213.046.416.122.602L2.84 16.646c-.293-.375-.728-.632-1.241-.632a1.599 1.599 0 1 0 0 3.198c.214 0 .416-.046.603-.122l5.915 10.246-5.915 10.246a1.59 1.59 0 0 0-.603-.122 1.599 1.599 0 1 0 0 3.198c.513 0 .948-.257 1.241-.632L27.859 56.47a1.59 1.59 0 0 0 1.477 2.201c.883 0 1.6-.716 1.6-1.599 0-.512-.258-.948-.633-1.24l15.235-26.388a.22.22 0 0 0 0-.218zM13.711 47.803L3.132 41.694l14.37 3.85 10.516 10.518-14.307-8.26zM8.367 29.769l8.797 15.237-11.925-3.195-2.08-.558c.008-.066.039-.125.039-.194 0-.512-.257-.948-.632-1.24l4.806-8.325.995-1.725zm20.97 25.706c-.363 0-.681.142-.95.345L17.919 45.35l26.906-15.533-14.884 25.78a1.588 1.588 0 0 0-.604-.122zM13.71 10.869L28.018 2.61 17.5 13.128l-14.37 3.85 10.58-6.109zM3.198 17.613c0-.069-.031-.128-.04-.194L17.67 13.53a.21.21 0 0 0 .097-.056L28.388 2.852c.268.203.586.345.948.345.214 0 .417-.045.604-.121l15.147 26.236L17.724 45.11l-9.17-15.883-5.988-10.373c.375-.293.632-.729.632-1.241z"
                      className="st0"
                    />{" "}
                    <path
                      id="_x3C_Compound_Path_x3E__42_"
                      d="M45.35 25.921c-1.074 0-2.02.506-2.646 1.282L20.79 14.551c.148-.382.238-.794.238-1.23a3.415 3.415 0 0 0-6.83 0 3.406 3.406 0 0 0 2.891 3.363v25.304a3.406 3.406 0 0 0-2.89 3.362 3.415 3.415 0 1 0 6.829 0c0-.435-.09-.847-.238-1.229l21.914-12.652a3.393 3.393 0 0 0 2.646 1.282 3.415 3.415 0 0 0 0-6.83zM18.137 41.988V16.684a3.39 3.39 0 0 0 2.123-1.23l21.913 12.653c-.148.382-.237.794-.237 1.229s.089.847.237 1.23L20.26 43.218a3.39 3.39 0 0 0-2.123-1.23z"
                      className="st0"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </Link>{" "}
          <span>
            <p>The inspired creative exchange</p> <p>Made with love in LA</p>
          </span>{" "}
          <div className="social-media">
            <ul>
              <li>
                <Link to="https://www.youtube.com/hellothematic" target="_blank">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="youtube"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="social-media-icon youtube svg-inline--fa fa-youtube fa-w-18"
                  >
                    <path
                      fill="currentColor"
                      d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                      className
                    />
                  </svg>
                </Link>
              </li>{" "}
              <li>
                <Link
                  to="https://open.spotify.com/user/hellothematic"
                  target="_blank"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="spotify"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    className="social-media-icon spotify svg-inline--fa fa-spotify fa-w-16"
                  >
                    <path
                      fill="currentColor"
                      d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
                      className
                    />
                  </svg>
                </Link>
              </li>{" "}
              <li>
                <Link
                  to="https://www.facebook.com/hellothematic"
                  target="_blank"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="social-media-icon facebook svg-inline--fa fa-facebook fa-w-16"
                  >
                    <path
                      fill="currentColor"
                      d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                      className
                    />
                  </svg>
                </Link>
              </li>{" "}
              <li>
                <Link to="https://twitter.com/hellothematic" target="_blank">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="social-media-icon twitter svg-inline--fa fa-twitter fa-w-16"
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      className
                    />
                  </svg>
                </Link>
              </li>{" "}
              <li>
                <Link
                  to="https://www.instagram.com/hellothematic"
                  target="_blank"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="social-media-icon instagram svg-inline--fa fa-instagram fa-w-14"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      className
                    />
                  </svg>
                </Link>
              </li>{" "}
              <li>
                <Link to="https://www.tiktok.com/@hellothematic" target="_blank">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="tiktok"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="social-media-icon tiktok svg-inline--fa fa-tiktok fa-w-14"
                  >
                    <path
                      fill="currentColor"
                      d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                      className
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>{" "}
          <div className="youtube">
            <Link
              to="https://www.youtube.com/channel/UCyhT_mKElaMJjFLHwSZFTrQ"
              target="_blank"
            >
              <img
                src={youtubeLogo}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="developed-youtube"
              />
            </Link>
          </div>
        </div>
      </div>{" "}
      <div className="footer-right">
          <div className="submit-music">
          <h2>Want free influencer promotion for your songs?</h2>{" "}
          <Link to="https://hellothematic.com/artists/" target="_blank">
            <JoinButton text="Submit Music" isNav/>
          </Link>
        </div>{" "}
        <div className="footer-right-content">
          <div className="footer-learn-links">
            <ul>
              <li>
                <Link
                  to="https://hellothematic.com/how-it-works/"
                  target="_blank"
                >
                  <p>How It Works</p>
                </Link>
              </li>{" "}
              <li>
                <Link
                  to="https://hellothematic.com/about-thematic/"
                  target="_blank"
                >
                  <p>About Us</p>
                </Link>
              </li>{" "}
              <li>
                <Link
                  to="https://hellothematic.com/#core-features"
                  target="_blank"
                >
                  <p>Core Features</p>
                </Link>
              </li>{" "}
              <li>
                <Link
                  to="https://hellothematic.com/thematic-affiliate-squad/"
                  target="_blank"
                >
                  <p>Affiliate Program</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-about-links">
            <ul>
              <li>
                <Link to="https://hellothematic.crunch.help/" target="_blank">
                  <p>Help Center</p>
                </Link>
              </li>{" "}
              <li>
                <Link
                  to="https://hellothematic.com/terms-of-use-privacy-policy/"
                  target="_blank"
                >
                  <p>Privacy &amp; Terms</p>
                </Link>
              </li>{" "}
              <li>
                <Link to="https://hellothematic.com/contact-us/" target="_blank">
                  <p>Contact Us</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
