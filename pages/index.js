import Head from 'next/head'
import Header from '../components/Header'
import ProductCover from '../components/ProductCover'
import POPULAR_DATA from '../public/popular'
import { useState, useEffect } from 'react';

export default function Home() {

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
    return windowSize;
  }

  const size = useWindowSize();

  console.log(size)

  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>theBootStore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full p-4 px-4 lg:px-10">
        <Header />
      </div>

      <div className="w-full my-8 px-10">
        <h1 className="font-bold text-4xl uppercase mb-6 text-center">Popular products</h1>
        <div className="flex flex-wrap justify-evenly">
          {
            POPULAR_DATA.filter((e) => e.id < 6).map((e, index) => <ProductCover data={e} key={index} />)
          }
        </div>
      </div>

      <div className="w-full my-8 px-4 lg:px-10">
        {
          size.width > 768 ? <img src="/rcb.png" className="rounded-2xl w-full" /> : <img src="/rcb-mobile.png" className="rounded-2xl w-full" />
        }

      </div>

      <div className="w-full my-8 px-4 lg:px-10">
        <h1 className="text-3xl uppercase font-bold mb-6 text-center">RECOMMENDED FOR YOU</h1>
        <div className="flex flex-wrap justify-evenly">
          {
            POPULAR_DATA.filter((e) => e.id > 7 && e.id < 13).map((e, index) => <ProductCover data={e} key={index} />)
          }
        </div>
      </div>

      <div className="w-full my-8 px-4 lg:px-10 relative">
        <video autoPlay loop muted className="w-full h-750 rounded-2xl object-cover">
          <source src="https://r5---sn-qxaelnel.googlevideo.com/videoplayback?expire=1634291466&ei=qvpoYbKfJ4iriwTT4IjABQ&ip=38.145.80.60&id=o-ADRci1P06UoOFh4jHpCZTrjeXDSasuaOBhTpt6iMugtb&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=E09rPi-avgCgGbyGjI3zEz8G&gir=yes&clen=22114728&ratebypass=yes&dur=252.145&lmt=1405679656173301&fexp=24001373,24007246&c=WEB&n=qliRT_tSJoyqkMF1YE&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAJNtzNOJgkJpz_-a1W71SNqIqlDXoWtGgNJ1QXn2zXdRAiBIMDD8HYPcdUA0xzxeQhPMTXClquEzzP5cevoKrfXx1A==&title=Nike+Football++Commercial+-+Ronaldo+%26+Irina&redirect_counter=1&cm2rm=sn-gwpa-a3vr7e&req_id=a8f2e93176d7a3ee&cms_redirect=yes&ipbypass=yes&mh=Ga&mip=2409:4063:4e11:432c:797a:c9bc:fec2:bca5&mm=29&mn=sn-qxaelnel&ms=rdu&mt=1634269720&mv=m&mvi=5&pl=41&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgJjQK8hYzvAnSCWUAwOE3VJu8lUNMi1XVzgqxh-ZJuugCIGwi4cTEnffpnJtDxgUR0YpMThmYt4X4jpfjZjRYGC7Q" />
        </video>
        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex items-center justify-between w-9/12 flex-col-reverse xl:flex-row">
          <div>
            <h1 className="font-extrabold text-black text-4xl my-4">SHOP THE BEST ITEM.</h1>
            <button className="bg-white font-extrabold text-black text-2xl rounded-2xl py-2 px-4 my-4">SHOP NOW.</button>
          </div>
          <div className="flex-col flex justify-center items-center">
            <img src="/Logo_NIKE.svg" />
            <h1 className="font-extrabold text-black text-4xl my-4">JUST DO IT.</h1>
          </div>
        </div>
      </div>

    </div>
  )
}
