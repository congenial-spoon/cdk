import * as React from 'react';

export interface LarkAuthProps {
  onComplete: () => void;
  src?: string;
}
const script = 'https://unpkg.com/vconsole@latest/dist/vconsole.min.js';

export function LarkAuth(props: LarkAuthProps) {
  function createScript(url: string, callback: () => void) {
    var oScript = document.createElement('script');
    oScript.type = 'text/javascript';
    oScript.async = true;
    oScript.src = url;
    /*
     ** script标签的onload和onreadystatechange事件
     ** IE6/7/8支持onreadystatechange事件
     ** IE9/10支持onreadystatechange和onload事件
     ** Firefox/Chrome/Opera支持onload事件
     */
    // 判断IE8及以下浏览器
    var isIE = !-[1];
    if (isIE) {
      alert('请使用Firefox/Chrome/Opera等浏览器访问');
    } else {
      // IE9及以上浏览器，Firefox，Chrome，Opera
      oScript.onload = callback;
    }
    document.body.appendChild(oScript);
  }

  React.useEffect(
    () => createScript(props.src || script, props?.onComplete),
    [props?.onComplete, props.src],
  );
  return (
    <div className="">
      LarkAuth
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
