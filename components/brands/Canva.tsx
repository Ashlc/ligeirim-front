const Canva = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1900 1900"
      className={className}
    >
      <defs>
        <radialGradient
          id="a"
          cx="529.1"
          cy="1247.84"
          r="1"
          gradientTransform="matrix(955.99, -1116.01, -1116.01, -955.99, 887145.08, 1785093.2)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#6420ff" />
          <stop offset="1" stopColor="#6420ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="b"
          cx="528.49"
          cy="1247.24"
          r="1"
          gradientTransform="matrix(957.51, 1352.49, 1352.49, -957.51, -2192415.35, 479678.92)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#00c4cc" />
          <stop offset="1" stopColor="#00c4cc" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="c"
          cx="529.06"
          cy="1248.53"
          r="1"
          gradientTransform="matrix(1023, -1030, -473.71, -470.49, 50577.56, 1134039.21)"
          xlinkHref="#a"
        />
        <radialGradient
          id="d"
          cx="528.46"
          cy="1247.19"
          r="1"
          gradientTransform="matrix(596, 1372, 2298.41, -998.43, -3180722.99, 520438.97)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#00c4cc" stopOpacity="0.73" />
          <stop offset="0" stopColor="#00c4cc" />
          <stop offset="1" stopColor="#00c4cc" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="950" cy="950" r="950" style={{ fill: "#7d2ae7" }} />
      <circle cx="950" cy="950" r="950" style={{ fill: "url(#a)" }} />
      <circle cx="950" cy="950" r="950" style={{ fill: "url(#b)" }} />
      <circle cx="950" cy="950" r="950" style={{ fill: "url(#c)" }} />
      <circle cx="950" cy="950" r="950" style={{ fill: "url(#d)" }} />
      <path
        d="M1360.14,1144.88c-7.84,0-14.74,6.62-21.92,21.08-81.08,164.41-221.12,280.74-383.17,280.74-187.38,0-303.42-169.15-303.42-402.83,0-395.83,220.54-624.7,414.26-624.7,90.52,0,145.8,56.89,145.8,147.41,0,107.44-61,164.33-61,202.22,0,17,10.58,27.31,31.56,27.31,84.29,0,183.22-96.86,183.22-233.69,0-132.66-115.47-230.18-309.18-230.18-320.15,0-604.66,296.8-604.66,707.47,0,317.88,181.52,527.94,461.6,527.94,297.27,0,469.16-295.77,469.16-391.77,0-21.26-10.87-31-22.21-31Z"
        transform="translate(0 0)"
        style={{ fill: "#fff" }}
      />
    </svg>
  );
};

export default Canva;
