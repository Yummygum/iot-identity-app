interface IWhiteLabelGradientsProps {
  primaryColor: string
  secondaryColor?: string
}

const WhiteLabelGradients = ({
  primaryColor,
  secondaryColor
}: IWhiteLabelGradientsProps) => {
  return (
    <div className="fade-in absolute flex h-full w-full flex-col justify-between overflow-hidden opacity-0">
      <div className="relative">
        <svg
          className="absolute top-0 left-0"
          fill="none"
          height="479"
          overflow="visible"
          viewBox="0 0 1328 479"
          width="1328"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_148_1772)" opacity={0.9} overflow="visible">
            <path
              d="M537.5 95C287.323 66.2512 221.358 85.9336 162.359 156.851C100.027 156.851 -250.038 257.472 -116 28C71.5 -293 583.005 -17.512 890 1.50002C1196.99 20.512 952.148 142.649 537.5 95Z"
              fill={primaryColor}
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="905.39"
              id="filter0_f_148_1772"
              width="1774.12"
              x="-446.323"
              y="-426.573"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_148_1772"
                stdDeviation="150"
              />
            </filter>
          </defs>
        </svg>

        <svg
          fill="none"
          height="612"
          overflow="visible"
          viewBox="0 0 664 612"
          width="664"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_148_1774)" opacity="0.4" overflow="visible">
            <path
              d="M-16.4989 97.9636C100.862 168.144 145.954 82.1046 153.829 30.3121C179.788 20.0017 253.834 34.7005 342.348 175.979C452.99 352.577 103.499 268.982 -28.827 308.494C-161.153 348.005 -163.2 10.2376 -16.4989 97.9636Z"
              fill={secondaryColor ?? primaryColor}
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="884.025"
              id="filter0_f_148_1774"
              width="1091"
              x="-427.334"
              y="-272.302"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_148_1774"
                stdDeviation="150"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="relative ml-auto w-fit max-w-fit">
        <svg
          fill="none"
          height="519"
          viewBox="0 0 1117 519"
          width="1117"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_148_1773)" opacity="0.12">
            <path
              d="M1370.33 1021.19C1081.33 755.988 825.329 910.687 733.457 1021.19C636.394 1021.19 416.108 921.032 311.467 520.412C180.666 19.6361 1202.16 524.643 1680.21 554.267C2158.26 583.89 1731.6 1352.69 1370.33 1021.19Z"
              fill={primaryColor}
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="1404"
              id="filter0_f_148_1773"
              width="2193"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_148_1773"
                stdDeviation="150"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default WhiteLabelGradients
