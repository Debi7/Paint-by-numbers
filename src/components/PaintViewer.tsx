import { useRef, useState } from 'react';
import ColorSVG from './ColorSVG';
import LinesSVG from './LinesSVG';

import '../App.css';

function PaintViewer() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [fillColor, setFillColor] = useState('');

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const target = e.target as SVGElement;

    const pathElement = target.closest('path');

    if (pathElement && svgRef.current && svgRef.current.contains(pathElement)) {
      const color = pathElement.getAttribute('fill') || '';
      setFillColor(color);
      console.log('Значение fill:', color);
    }
  };

  // const handleMouseLeave = () => {
  //   setFillColor('');
  // }


  return (
    <div className="wrapper">
      <div className="containerPaints">
        <ColorSVG
          className={'color'}
          onClick={handleClick}
          ref={svgRef}

        // onMouseEnter={handleHover}
        // onMouseLeave={handleMouseLeave}
        />

        <LinesSVG
          className={'lines'}
        />
      </div>
      <div className="wrapper-text">
        <p>Color: <span className='fillColor'>{fillColor}</span></p>
      </div>
    </div>
  );
}

export default PaintViewer;
