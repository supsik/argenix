'use client';

import { useEffect, useState, useRef } from "react";

type CursorType = 'default' | 'pointer';

export function DefaultCursorSvg() {
  return <svg
    width="12"
    height="15"
    viewBox="0 0 16 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.5 18.5L0 0L16 9.5L8 11.5L3.5 18.5Z" fill="#00624D" />
  </svg>
}

function PointerCursorSvg() {
  return <svg
    width="12"
    height="15"
    viewBox="0 0 28 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5176 0.0280246C10.8858 -0.0266257 11.2612 -0.00140446 11.6191 0.104196C11.9914 0.214087 12.3391 0.408834 12.6357 0.676462L12.7441 0.779978C12.9904 1.02825 13.1892 1.32548 13.3281 1.65498C13.4869 2.03202 13.564 2.44171 13.5508 2.8542L13.5498 2.8708V7.28388H15.6328L15.8232 7.29267C16.2636 7.33003 16.6903 7.48824 17.0566 7.75556L17.21 7.87666C17.5057 8.12998 17.7428 8.45249 17.9014 8.82002L17.9746 9.00752L18.3262 10.0378L20.3154 9.72236C20.7265 9.72996 21.1311 9.83917 21.4951 10.0436C21.8326 10.2333 22.1271 10.4994 22.3545 10.8239L22.4482 10.9665L22.5771 11.1784L23.0107 11.8933L24.0244 11.5036L24.0254 11.5026C24.4112 11.3537 24.8249 11.3065 25.2285 11.363L25.3906 11.3923C25.9828 11.556 26.5126 11.9173 26.8936 12.4284C27.2807 12.9482 27.4901 13.5911 27.4824 14.2536V21.9938C27.4824 21.9808 27.4823 21.9978 27.4727 22.0427L27.4629 22.0837L27.4551 22.1091L27.4492 22.1354L24.751 32.8854C24.7352 32.9484 24.7017 33.0026 24.6592 33.0436L24.6279 33.07C24.581 33.104 24.5274 33.1213 24.4717 33.1198L23.4443 33.0925V33.1218H10.5381V33.1081L9.52637 33.1198C9.48971 33.1203 9.45773 33.1106 9.43262 33.0954C9.4091 33.0811 9.37946 33.0543 9.35449 33.0085L9.33301 32.9694L9.3252 32.9577L9.31836 32.946L7.39355 29.5798C4.99295 25.3561 1.57897 19.2902 0.875977 17.9675L0.874023 17.9626L0.867188 17.9499L0.860352 17.9392L0.854492 17.9284L0.850586 17.9216L0.833984 17.8913L0.819336 17.8688L0.641602 17.57C0.259912 16.8765 0.0390648 16.0986 0 15.2976L0.00292969 15.2106C0.0159503 14.9657 0.0701157 14.7271 0.164062 14.5046C0.273396 14.2457 0.432314 14.0156 0.62793 13.8278L0.642578 13.8132L0.666016 13.7917L0.702148 13.7507C0.923059 13.5029 1.1907 13.307 1.48535 13.1735C1.77909 13.0406 2.09537 12.9721 2.41406 12.9714C2.75321 12.9738 3.0902 13.0451 3.40234 13.1823C3.71361 13.3193 3.99868 13.5209 4.23926 13.7761L4.26758 13.8063L4.28125 13.819L8.39062 18.0358V2.80927C8.38828 2.15153 8.60605 1.51629 9.00098 1.00947C9.38946 0.511304 9.92551 0.168936 10.5176 0.0280246Z"
      fill="#00624D"
    />
  </svg>
}

const cursorComponents = {
  default: <DefaultCursorSvg />,
  pointer: <PointerCursorSvg />,
}

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const [cursorType, setCursorType] = useState<CursorType>('default');

  useEffect(() => {
    const el = cursorRef.current;

    if (!el)
      return;

    const handleMove = (event: MouseEvent) =>
      el.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;

    const handleOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('.app-label-wr, button, a'))
        setCursorType('pointer');
      else
        setCursorType('default');
    };

    document.body.addEventListener('mousemove', handleMove);
    document.body.addEventListener('mouseover', handleOver);

    return () => {
      document.body.removeEventListener('mousemove', handleMove);
      document.body.removeEventListener('mouseover', handleOver);
    };
  }, []);

  return <div ref={cursorRef} className="cursor">
    {cursorComponents[cursorType]}
  </div>
}
