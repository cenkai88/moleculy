import React from "react";

export const Button = ({
  type = "default", // [default, ghost, text]
  size = "small", // [tiny, small, medium, large]
  shape = "round", // [round, circle, rect]
  disabled,
  icon,
  color = "#0052CC",
  onClick,
  text = 'button'
}) => {
  const bgColor = disabled ? '#C1C7D0' : color;
  const textColor = disabled ? '#C1C7D0' : color;
  const borderColor = disabled ? '#C1C7D0' : color;

  const paddingHorizontal = {
    tiny: 12,
    small: 14,
    medium: 18,
    large: 24
  }[size];
  const paddingVerticle = {
    tiny: 6,
    small: 8,
    medium: 10,
    large: 16
  }[size] || 8;
  const padding = `${paddingVerticle}px ${paddingHorizontal}px`;

  const fontSize = {
    tiny: 12,
    small: 13,
    medium: 14,
    large: 16
  }[size] || 13;

  const lineHeight = {
    tiny: '17px',
    small: '18px',
    medium: '20px',
    large: '22px'
  }[size];

  const borderRadius = {
    round: 4,
    circle: fontSize + 2 * paddingVerticle,
    rect: 0
  }[shape];

  const focusBorderClass = {
    tiny: 'focus:ring-2',
    small: 'focus:ring-2',
    medium: 'focus:ring-2',
    large: 'focus:ring-4'
  }[size];

  const minWidth = {
    tiny: 'auto',
    small: 'auto',
    medium: 'auto',
    large: 240
  }[size];

  const pointerEvents = disabled ? 'none' : 'auto';
  const cursor = disabled ? 'not-allowed' : 'pointer';

  const onClickFn = (e) => {
    if (typeof onClick === 'function') onClick(e);
  };

  switch (type) {
    case 'ghost':
      return <div className='w-fit' style={{ cursor }}>
        <button onClick={onClickFn.bind(this)} style={{ lineHeight, minWidth, color: textColor, padding, fontSize, borderRadius, borderColor, pointerEvents }} className={`flex justify-center items-center transition border hover:opacity-60 focus:opacity-90 whitespace-nowrap ${focusBorderClass} ring-[#B3D4FF]`}>
          {icon ? <div className='mr-2'>{icon}</div> : null}{text}
        </button>
      </div>
    case 'text':
      return <div className='w-fit' style={{ cursor }}>
        <button onClick={onClickFn.bind(this)} style={{ lineHeight, color: textColor, fontSize, pointerEvents }} className='relative transition hover:opacity-75 focus:opacity-75'>
          {text}
          <div style={{ backgroundColor: textColor }} className='absolute bottom-[-1px] w-full h-[1px]'></div>
        </button>
      </div>
    default:
      return <div className='w-fit' style={{ cursor }}>
        <div className="ml-text-white">test</div>
        <button onClick={onClickFn.bind(this)} style={{ lineHeight, minWidth, backgroundColor: bgColor, padding, fontSize, borderRadius, pointerEvents }} className={`flex justify-center items-center text-white transition hover:opacity-75 focus:opacity-80 ${focusBorderClass} ring-[#B3D4FF]`}>
          {icon ? <div className='mr-2'>{icon}</div> : null}{text}
        </button>
      </div>
  }
}
