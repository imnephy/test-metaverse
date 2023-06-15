const SemiCircle = () => {
  const color = '#E75626';

  const radius = 240;
  const strokeWidth = 1;
  const viewBoxSize = radius * 2 + strokeWidth + 4;

  const startPointX = radius + strokeWidth;
  const startPointY = strokeWidth;
  const centerPointX = radius + radius + strokeWidth;
  const centerPointY = radius + strokeWidth;
  const endPointX = radius + strokeWidth;
  const endPointY = radius * 2 + strokeWidth;

  return (
    <svg
      className="absolute"
      width={viewBoxSize}
      height={viewBoxSize + 6}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
    >
      <path
        d={`M ${
          radius + strokeWidth
        },${strokeWidth} A ${radius},${radius} 0 0 0 ${
          radius + strokeWidth
        },${radius * 2 + strokeWidth}`}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        transform={`rotate(180 ${radius + strokeWidth} ${
          radius + strokeWidth
        })`}
      />
      <circle cx={startPointX} cy={startPointY} r={4} fill={color} />
      <circle cx={endPointX} cy={endPointY} r={4} fill={color} />
      <circle
        cx={centerPointX}
        cy={centerPointY}
        r={4}
        fill={color}
      />
    </svg>
  );
};

export default SemiCircle;
